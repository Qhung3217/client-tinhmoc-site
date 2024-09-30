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

import { useGetCategories } from 'src/actions/category';
import {
  addProduct,
  updateProduct,
  uploadProductImages,
  uploadProductLink3d,
  uploadProductThumbnail,
} from 'src/actions/product';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewProductSchemaType = z.infer<typeof NewProductSchema>;

export const NewProductSchema = z.object({
  title: z.string().min(1, { message: 'Tên sản phẩm là bắt buộc!' }),
  content: z.string().min(1, { message: 'Mô tả sản phẩm là bắt buộc!' }),
  price: z.string(),
  salePercent: z.number(),
  priority: z.number(),
  thumbnail: z.string(),
  slug: z.string().min(1, { message: 'Mã sản phẩm là bắt buộc!' }),
  categoryId: z.string(),
});

export type ThumbSchemaType = z.infer<typeof NewThumbSchema>;

export const NewThumbSchema = z.object({
  thumb: z.union([z.string(), z.instanceof(File)]),
});

export type Link3dSchemaType = z.infer<typeof NewLink3dSchema>;

export const NewLink3dSchema = z.object({
  thumb: z.union([z.string(), z.instanceof(File)]),
});

export type ImagesSchemaType = z.infer<typeof NewImagesSchema>;

export const NewImagesSchema = z.object({
  images: z.array(z.union([z.string(), z.instanceof(File)])),
});

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: IProductItem;
  mutate?: any;
};

export function ProductNewEditForm({ currentProduct, mutate }: Props) {
  const router = useRouter();
  const { categories, categoriesLoading } = useGetCategories();

  const defaultValues = useMemo(
    () => ({
      title: currentProduct?.title || '',
      content: currentProduct?.content || '',
      thumbnail: currentProduct?.thumbnail || '',
      link3d: currentProduct?.link3d || '',
      slug: currentProduct?.slug || '',
      price: currentProduct?.price || '',
      salePercent: currentProduct?.salePercent || 0,
      priority: currentProduct?.priority || 0,
      categoryId:
        typeof currentProduct?.categoryId === 'string'
          ? currentProduct?.categoryId
          : categories.length > 0
            ? categories[0].id
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

  const defaultLink3dValues = useMemo(
    () => ({
      thumb: currentProduct?.link3d || '',
    }),
    [currentProduct]
  );

  const defaultImagesValues = useMemo(
    () => ({
      images: currentProduct?.images || [],
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

  const link3dMethods = useForm<ThumbSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewLink3dSchema),
    defaultValues: defaultLink3dValues,
  });

  const imagesMethods = useForm<ImagesSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewImagesSchema),
    defaultValues: defaultImagesValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
    thumbMethods.reset(defaultThumbValues);
    link3dMethods.reset(defaultLink3dValues);
    imagesMethods.reset(defaultImagesValues);
  }, [
    currentProduct,
    defaultImagesValues,
    defaultThumbValues,
    defaultLink3dValues,
    defaultValues,
    imagesMethods,
    methods,
    thumbMethods,
    link3dMethods,
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

  const { watch: watchLink3d, setValue: setValueLink3d } = link3dMethods;

  const valuesLink3d = watchLink3d();

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

  const onSubmit = handleSubmit(async (data) => {
    try {
      const fileImages = valuesImages.images.filter(
        (image): image is File => image instanceof File
      );
      const stringImages = valuesImages.images.filter(
        (image): image is string => typeof image === 'string'
      );
      console.log('DATA after upload', data);
      if (!currentProduct) {
        const product = await addProduct(data);
        await uploadProductThumbnail(product.id, valuesThumb.thumb);
        await uploadProductLink3d(product.id, valuesLink3d.thumb);
        await uploadProductImages(product.id, fileImages, stringImages);
      } else {
        await updateProduct(currentProduct.id, data);
        await uploadProductThumbnail(currentProduct.id, valuesThumb.thumb);
        await uploadProductLink3d(currentProduct.id, valuesLink3d.thumb);
        await uploadProductImages(currentProduct.id, fileImages, stringImages);
      }
      console.log(valuesLink3d.thumb);
      reset();
      toast.success(currentProduct ? 'Chỉnh sửa thành công!' : 'Thêm thành công!');
      router.push(paths.dashboard.product.root);
      mutate();
    } catch (error) {
      console.error(error);
    }
  });
  const handleRemoveFile = useCallback(() => {
    setValueThumb('thumb', '', { shouldValidate: true });
  }, [setValueThumb]);

  const handleRemoveAllFiles = useCallback(() => {
    setValueThumb('thumb', '', { shouldValidate: true });
  }, [setValueThumb]);

  const handleRemoveLink3d = useCallback(() => {
    setValueLink3d('thumb', '', { shouldValidate: true });
  }, [setValueLink3d]);

  const handleRemoveAllLink3d = useCallback(() => {
    setValueLink3d('thumb', '', { shouldValidate: true });
  }, [setValueLink3d]);

  const handleRemoveImages = useCallback(
    (inputFile: File | string) => {
      const filtered = valuesImages.images.filter((image) => image !== inputFile);
      setValueImages('images', filtered);
    },
    [setValueImages, valuesImages.images]
  );

  const handleRemoveAllImages = useCallback(() => {
    setValueImages('images', [], { shouldValidate: true });
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
        <Field.Text name="slug" label="Mã sản phẩm *" />
        <Field.Text name="title" label="Tên sản phẩm *" />
        <Field.Text type="number" name="priority" label="Độ ưu tiên" />
        {/* <Field.Text name="price" label="Giá sản phẩm" />
        <Field.Text type="number" name="salePercent" label="Giảm giá" /> */}

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Mô tả *</Typography>
          <Field.Editor name="content" sx={{ maxHeight: 480 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh bìa</Typography>
          <Form methods={thumbMethods}>
            <Field.Upload
              thumbnail
              name="thumb"
              maxSize={3145728}
              onRemove={handleRemoveFile}
              onRemoveAll={handleRemoveAllFiles}
            />
          </Form>
        </Stack>

        {/* <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh mô tả</Typography>
          <Form methods={imagesMethods}>
            <Field.Upload
              multiple
              thumbnail
              name="images"
              maxSize={3145728}
              onRemove={handleRemoveImages}
              onRemoveAll={handleRemoveAllImages}
            />
          </Form>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh 3D</Typography>
          <Form methods={link3dMethods}>
            <Field.Upload
              name="thumb"
              maxSize={1800000000}
              accept={{
                'application/octet-stream': ['.fbx', '.glb'],
              }}
              onRemove={handleRemoveLink3d}
              onRemoveAll={handleRemoveAllLink3d}
            />
          </Form>
        </Stack> */}

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
              <option key={category.name} label={category.name} value={category.id} />
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
