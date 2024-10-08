import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

type Props = {
  description?: string;
};

export function ProductDetailsDescription({ description }: Props) {
  return (
    <Markdown
      children={description}
      sx={{
        '& p, li, ol': {
          typography: 'body2',
        },
        '& ol': {
          p: 0,
          display: { md: 'flex' },
          listStyleType: 'none',
          '& li': {
            '&:first-of-type': { minWidth: 240, mb: { xs: 0.5, md: 0 } },
          },
        },
        '& .nml__editor__content__image': {
          borderRadius: 0,
        },
      }}
    />
  );
}
