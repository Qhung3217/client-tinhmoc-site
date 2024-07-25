import type { IProductItem } from 'src/types/product';

import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingIcon } from 'yet-another-react-lightbox';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useGetCategories } from 'src/actions/category';
import {
  addProduct,
  updateProduct,
  uploadProductImages,
  uploadProductThumbnail,
} from 'src/actions/product';

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
  thumb: z.union([z.string(), z.instanceof(File)]),
});

export type ImagesSchemaType = z.infer<typeof NewImagesSchema>;

export const NewImagesSchema = z.object({
  images: z.array(z.union([z.string(), z.instanceof(File)])),
});

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: IProductItem;
};

export function ProductNewEditForm({ currentProduct }: Props) {
  const router = useRouter();
  const [isChangedImage, setIsChangedImage] = useState<boolean>(false);
  const { categories, categoriesLoading } = useGetCategories();

  const defaultValues = useMemo(
    () => ({
      title: currentProduct?.title || '',
      content: currentProduct?.content || '',
      thumbnail: currentProduct?.thumbnail || '',
      slug: currentProduct?.slug || '',
      categoryId:
        typeof currentProduct?.categoryId === 'string'
          ? currentProduct?.categoryId
          : categories.length > 0
            ? categories[0].categories[0].id
            : '',
    }),
    [currentProduct, categories]
  );

  const defaultThumbValues = useMemo(
    () => ({
      thumb: currentProduct?.thumbnail || '',
    }),
    [currentProduct]
  );

  const defaultImagesValues = useMemo(
    () => ({
      images: currentProduct?.images,
    }),
    [currentProduct]
  );

  const methods = useForm<NewProductSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewProductSchema),
    defaultValues,
  });

  const thumbMethods = useForm<ThumbSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewThumbSchema),
    defaultValues: defaultThumbValues,
  });

  const imagesMethods = useForm<ImagesSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewImagesSchema),
    defaultValues: defaultImagesValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
    thumbMethods.reset(defaultThumbValues);
    imagesMethods.reset(defaultImagesValues);
  }, [
    currentProduct,
    defaultImagesValues,
    defaultThumbValues,
    defaultValues,
    imagesMethods,
    methods,
    thumbMethods,
  ]);

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

  const { watch: watchImages, setValue: setValueImages } = imagesMethods;

  const valuesImages = watchImages();

  useEffect(() => {
    setValue('categoryId', values.categoryId, {
      shouldValidate: true,
    });
  }, [setValue, values.categoryId]);

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  useEffect(() => {
    setIsChangedImage(true);
  }, [valuesThumb.thumb]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const fileImages = valuesImages.images.filter(
        (image): image is File => image instanceof File
      );
      console.log('DATA after upload', data);
      if (!currentProduct) {
        const product = await addProduct(data);
        await uploadProductThumbnail(product.id, valuesThumb.thumb);
        await uploadProductImages(product.id, fileImages);
      } else {
        await updateProduct(currentProduct.id, data);
        if (isChangedImage) {
          await uploadProductThumbnail(currentProduct.id, valuesThumb.thumb);
          await uploadProductImages(currentProduct.id, fileImages);
        }
      }
      reset();
      toast.success(currentProduct ? 'Chỉnh sửa thành công!' : 'Thêm thành công!');
      router.push(paths.dashboard.product.root);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered = valuesThumb.thumb;
      setValueThumb('thumb', filtered);
      setIsChangedImage(true);
    },
    [setValueThumb, valuesThumb.thumb]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValueThumb('thumb', '', { shouldValidate: true });
    setIsChangedImage(true);
  }, [setValueThumb]);

  const handleRemoveImages = useCallback(
    (inputFile: File | string) => {
      const filtered = valuesImages.images;
      setValueImages('images', filtered);
      setIsChangedImage(true);
    },
    [setValueImages, valuesImages.images]
  );

  const handleRemoveAllImages = useCallback(() => {
    setValueImages('images', [], { shouldValidate: true });
    setIsChangedImage(true);
  }, [setValueImages]);

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
              // multiple
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

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh mô tả</Typography>
          <Form methods={imagesMethods}>
            <Field.Upload
              multiple
              thumbnail
              name="images"
              maxSize={3145728}
              onRemove={handleRemoveImages}
              onRemoveAll={handleRemoveAllImages}
              // onUpload={handleUpload}
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
            {categories.map((category: any) => (
              <optgroup key={category.name} label={category.name}>
                {category.categories.map((c: any) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
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
