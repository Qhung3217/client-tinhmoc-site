import type { ICategoryItem } from 'src/types/category';

import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { addCategory, updateCategory, useGetCategories } from 'src/actions/category';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewCategorySchemaType = z.infer<typeof NewCategorySchema>;

export const NewCategorySchema = z.object({
  name: z.string().min(1, { message: 'Tên sản phẩm là bắt buộc!' }),
});

// ----------------------------------------------------------------------

type Props = {
  currentCategory?: ICategoryItem;
};

export function CategoryNewEditForm({ currentCategory }: Props) {
  const router = useRouter();
  const { categories, categoriesLoading } = useGetCategories();

  const defaultValues = useMemo(
    () => ({
      name: currentCategory?.name || '',
    }),
    [currentCategory]
  );

  console.dir(currentCategory);

  console.dir(defaultValues);

  const methods = useForm<NewCategorySchemaType>({
    mode: 'all',
    resolver: zodResolver(NewCategorySchema),
    defaultValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [currentCategory, defaultValues, methods]);

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentCategory) {
      reset(defaultValues);
    }
  }, [currentCategory, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('DATA after upload', data);
      if (!currentCategory) {
        await addCategory(data);
      } else {
        await updateCategory(currentCategory.id, data);
      }
      reset();
      toast.success(currentCategory ? 'Chỉnh sửa thành công!' : 'Thêm thành công!');
      router.push(paths.dashboard.category.root);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Card>
      <CardHeader title="Thông tin loại sản phẩm" subheader="Tên sản phẩm" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text name="name" label="Tên loại sản phẩm *" />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentCategory ? 'Thêm loại sản phẩm' : 'Lưu thay đổi'}
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
