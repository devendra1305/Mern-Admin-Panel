import {  GridColumnMenu } from '@mui/x-data-grid';
  
  const CustomColumnMenu = (props : GridColumnMenuProps) => {
    
    return (
        <GridColumnMenu
          {...props}
          slots={{
            columnMenuSortItem:null,
          }}
        />
      );
  };
  
  export default CustomColumnMenu;