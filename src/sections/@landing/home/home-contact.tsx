import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, styled, useTheme, Container, Typography } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Image } from 'src/components/image';
import { Grid } from 'src/components/Grid/mui';
import { MuiBox } from 'src/components/@mui/mui-box';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type HomeContactSchemaType = z.infer<typeof HomeContactSchema>;

export const HomeContactSchema = z.object({
  name: z.string().min(1, { message: 'Họ và tên là bắt buộc!' }),
  phone: z
    .string()
    .min(1, { message: 'Số điện thoại là bắt buộc!' })
    .regex(/^(?:(\+84|84|0)(3|5|7|8|9))([0-9]{8})$/, 'Số điện thoại không hợp lệ!'),
  email: z.string().min(1, { message: 'Email là bắt buộc!' }).email('Email không hợp lệ!'),
  content: z.string().trim().min(1, { message: 'Nội dung là bắt buộc!' }),
});
// ----------------------------------------------------------------------
const TextFieldStyled = styled(Field.Text)({
  '& label.Mui-focused.MuiInputLabel-shrink': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: 'white',
      },
    },
  },
});
// ----------------------------------------------------------------------

export default function HomeContact() {
  const isSubmitted = useBoolean();
  const theme = useTheme();

  const defaultValues = useMemo(
    () => ({
      name: '',
      phone: '',
      email: '',
      content: '',
    }),
    []
  );
  const methods = useForm<HomeContactSchemaType>({
    mode: 'all',
    resolver: zodResolver(HomeContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const formValues = watch();
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      isSubmitted.onTrue();
      reset();
      toast.success('Yêu cầu của bạn đã được gửi!');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.darker,
        p: '0px !important',
        mt: { xs: 8, md: 12 },
        mb: 4,
        pr: '0px !important',
        borderRadius: 0.5,
        overflow: 'hidden',
      }}
    >
      <Grid container>
        {isSubmitted.value ? (
          <Grid xs={12} md={6}>
            <ThanksContent name={formValues.name} email={formValues.email} />
          </Grid>
        ) : (
          <Grid
            xs={12}
            md={6}
            sx={{
              p: 3,
              pt: 4,
              // pr: 6,
              position: 'relative',
            }}
          >
            <MuiBox
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(assets/landing/bg_contact_form_02.jpg)',
                filter: 'brightness(0.8)',
                opacity: 0.1,
                left: -26,
                objectFit: 'cover',
              }}
            />
            <MuiBox
              sx={{
                position: 'absolute',
                top: 0,
                right: 24,
                backgroundColor: theme.palette.primary.dark,
                py: 0.5,
                px: 1,
                color: '#f5f5f5',
                fontWeight: 500,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            >
              (+84) 0292 654 6543
            </MuiBox>
            <MuiBox sx={{ color: theme.palette.secondary.main, mb: 4 }}>
              <Typography variant="h2">Bạn cần hỗ trợ?</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 400,
                  mt: 1,
                }}
              >
                Xin vui lòng để lại yêu cầu hỗ trợ của bạn.
              </Typography>
            </MuiBox>
            <Form methods={methods} onSubmit={onSubmit}>
              <Grid container spacing={3} sx={{ color: '#fff' }}>
                <Grid xs={12} md={6}>
                  <TextFieldStyled name="name" label="Họ và tên" />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextFieldStyled name="phone" label="Số điện thoại" />
                </Grid>
                <Grid xs={12}>
                  <TextFieldStyled type="email" name="email" label="Email" />
                </Grid>
                <Grid xs={12}>
                  <TextFieldStyled name="content" label="Nội dung" multiline minRows={2} />
                </Grid>
                <Grid xs={12}>
                  <LoadingButton
                    sx={{
                      borderRadius: 0.5,
                      float: 'right',
                      typography: 'h6',
                      px: 3,
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    loading={isSubmitting}
                  >
                    Gửi yêu cầu
                  </LoadingButton>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        )}
        <Grid
          xs={12}
          md={6}
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        >
          <Image
            // src="https://images.unsplash.com/photo-1726503453413-5bfb0e1d931d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            // src="/assets/landing/typo_bg_02.png"
            src="/assets/landing/bg_contact_form.jpg"
            alt="image"
            sx={{
              width: 1,
              aspectRatio: '1/1',
              height: 1,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

type ThanksContantProps = {
  name: string;
  email: string;
};
function ThanksContent({ name, email }: ThanksContantProps) {
  return (
    <Stack
      spacing={2}
      sx={{ p: 4, color: 'white', height: 1 }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">Yêu cầu đã được gửi!</Typography>
      <MuiBox component="video" autoPlay muted>
        <source src="/assets/landing/confirm.webm" type="video/webm" />
      </MuiBox>

      <Typography>
        Cảm ơn bạn <strong>{name}</strong> đã gửi yêu cầu hỗ trợ
      </Typography>
      <Typography>Chúng tôi đã tiếp nhận và xử lý sớm trong thời gian làm việc</Typography>
      <Typography>
        Bên cạnh đó, chúng tôi cũng đã gửi một email tới địa chỉ <strong>{email}</strong>
      </Typography>
    </Stack>
  );
}
