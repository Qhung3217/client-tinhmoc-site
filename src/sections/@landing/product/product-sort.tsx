import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  onSort: (newValue: string) => void;
  sortOptions: {
    value: string;
    label: string;
  }[];
};

export function ProductSort({ sort, onSort, sortOptions }: Props) {
  const popover = usePopover();

  const sortLabel = sortOptions.find((option) => option.value === sort)?.label;

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={popover.onOpen}
        endIcon={
          <Iconify
            icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
          />
        }
        sx={{ fontWeight: 'fontWeightSemiBold' }}
      >
        Sắp xếp:
        <MuiBox component="span" sx={{ ml: 0.5, fontWeight: 'fontWeightBold' }}>
          {sortLabel}
        </MuiBox>
      </Button>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === sort}
              onClick={() => {
                popover.onClose();
                onSort(option.value);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}
