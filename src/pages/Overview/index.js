import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  Chip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as AttachMoneyIcon
} from '@mui/icons-material';

const Overview = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,239',
      change: '+12.5%',
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
      color: '#4caf50'
    },
    {
      title: 'Total Users',
      value: '2,847',
      change: '+8.2%',
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
      color: '#2196f3'
    },
    {
      title: 'Orders',
      value: '1,423',
      change: '+15.3%',
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
      color: '#ff9800'
    },
    {
      title: 'Growth Rate',
      value: '23.1%',
      change: '+2.1%',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      color: '#9c27b0'
    }
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: stat.color, mr: 2 }}>
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {stat.title}
                    </Typography>
                  </Box>
                </Box>
                <Chip
                  label={stat.change}
                  size="small"
                  sx={{
                    bgcolor: stat.color,
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Revenue Chart
            </Typography>
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f5f5f5',
                borderRadius: 1
              }}
            >
              <Typography variant="body1" sx={{ color: '#666' }}>
                Chart component will be implemented here
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Recent Activity
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { action: 'New order received', time: '2 minutes ago' },
                { action: 'User registration', time: '5 minutes ago' },
                { action: 'Payment processed', time: '10 minutes ago' },
                { action: 'Product updated', time: '15 minutes ago' }
              ].map((activity, index) => (
                <Box key={index} sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {activity.action}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#666' }}>
                    {activity.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
