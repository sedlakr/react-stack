import Badge from '@mui/material/Badge';
import React from 'react';

export function BadgeEx() {
  return <>
    Badge:<br/>
    <Badge badgeContent={4} color="primary">
      Unread emails&nbsp;&nbsp;
    </Badge>
  </>;
}