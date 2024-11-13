import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import './orders.css';
import { Link } from 'react-router-dom';
import { Clear } from '@mui/icons-material';

const OrderCard = ({ OrderData }) => {
  const { data, deleteBookingMutation } = OrderData;

  // Function to handle the delete booking action
  const onDeleteBooking = (id) => {
    // Make sure the ID is passed correctly to delete the booking
    deleteBookingMutation({ id });
  };

  return (
    <Card variant="outlined" className="order-card">
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" component="div">{data.reservation.name}</Typography>
        <Typography component="p">Order: {data.reservation.Order}</Typography>
        <Typography component="p">Table: {data.table_no}</Typography>
      </Box>

      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Link to view the table */}
        <Link to={`${data.id}`}>
          <Button color="secondary" variant="outlined">
            View Table
          </Button>
        </Link>

        {/* Button to delete the booking */}
        <IconButton onClick={() => onDeleteBooking(data.id)} size="small">
          <Clear />
        </IconButton>
      </Box>
    </Card>
  );
};

export default OrderCard;
