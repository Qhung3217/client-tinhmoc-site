import type { IProductItem } from 'src/types/product';

import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useEffect, useCallback } from 'react';
import { LoadingIcon } from 'yet-another-react-lightbox';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { uploadImage } from 'src/actions/file';
import { addProduct } from 'src/actions/product';
import { useGetCategories } from 'src/actions/category';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewProductSchemaType = z.infer<typeof NewProductSchema>;

export const NewProductSchema = z.object({
  title: z.string().min(1, { message: 'Tên sản phẩm là bắt buộc!' }),
  content: z.string().min(1, { message: 'Mô tả sản phẩm là bắt buộc!' }),
  thumbnail: z.string(),
  slug: z.string().min(1, { message: 'Mã sản phẩm là bắt buộc!' }),
  categoryId: z.string(),
});

export type ThumbSchemaType = z.infer<typeof NewThumbSchema>;

export const NewThumbSchema = z.object({
  thumb: z
    .array(z.union([z.string(), z.instanceof(File)]))
    .min(1, { message: 'Ảnh bìa là bắt buộc!' }),
});

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: IProductItem;
};

export function ProductNewEditForm({ currentProduct }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      title: currentProduct?.title || '',
      content: currentProduct?.content || '',
      thumbnail: currentProduct?.thumbnail || '',
      slug: currentProduct?.slug || '',
      categoryId: typeof currentProduct?.categoryId === 'string' ? currentProduct?.categoryId : '',
    }),
    [currentProduct]
  );

  const methods = useForm<NewProductSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewProductSchema),
    defaultValues,
  });

  const thumbMethods = useForm<ThumbSchemaType>({
    resolver: zodResolver(NewThumbSchema),
    defaultValues: {
      thumb: [],
    },
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const { watch: watchThumb, setValue: setValueThumb } = thumbMethods;

  const valuesThumb = watchThumb();

  const { categories, categoriesLoading } = useGetCategories();

  useEffect(() => {
    if (categories.length > 0) {
      setValue('categoryId', categories[0].id, {
        shouldValidate: true,
      });
    }
  }, [categories, setValue]);

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const imageUrls = await uploadImage(valuesThumb.thumb[0]);
      if (imageUrls.length > 0) {
        data.thumbnail = imageUrls;
      }
      console.log('DATA after upload', data);
      await addProduct(data);
      reset();
      toast.success(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.product.root);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered =
        valuesThumb.thumb && valuesThumb.thumb?.filter((file: any) => file !== inputFile);
      setValueThumb('thumb', filtered);
    },
    [setValueThumb, valuesThumb.thumb]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValueThumb('thumb', [], { shouldValidate: true });
  }, [setValueThumb]);

  const renderDetails = (
    <Card>
      <CardHeader
        title="Thông tin sản phẩm"
        subheader="Mã sản phẩm, Tên sản phẩm, Mô tả, Ảnh bìa..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text name="slug" label="Mã sản phẩm" />
        <Field.Text name="title" label="Tên sản phẩm" />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Mô tả</Typography>
          <Field.Editor name="content" sx={{ maxHeight: 480 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh bìa</Typography>
          <Form methods={thumbMethods}>
            <Field.Upload
              multiple
              thumbnail
              name="thumb"
              maxSize={3145728}
              onRemove={handleRemoveFile}
              onRemoveAll={handleRemoveAllFiles}
              // onUpload={handleUpload}
              maxFiles={1}
            />
          </Form>
        </Stack>
        {categoriesLoading ? (
          <LoadingIcon />
        ) : (
          <Field.Select
            native
            name="categoryId"
            label="Loại sản phẩm"
            InputLabelProps={{ shrink: true }}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field.Select>
        )}
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProduct ? 'Thêm sản phẩm' : 'Lưu thay đổi'}
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
        {renderDetails}

        {renderActions}
      </Stack>
    </Form>
  );
}
