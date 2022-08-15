import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './main.css';

export default function BasicCard() {
  return (
    <Card className="customs_boxes" style={{backgroundColor: "#ececec"}}>
      <CardContent>
        <Typography className="medicare_hd" variant="h5" align="center" gutterBottom component="div">
            MEDICARE NEWS
        </Typography>
        <Box sx={{
                width: '100%',
                display: "inline-flex",
                marginTop: 1
            }}>
            <Box className='box-4' sx={{
                    width: '40%',
                }}>
                <Box className="customs_imagebx" sx={{ }}/>
            </Box>
            <Box className='box-6' sx={{
                    width: '60%',
                }}>
                <Box className="bld_para" sx={{ fontWeight: 700, marginBottom: 2 }}>
                    Durable Medical Equipment Resources for Ordering Physicians
                </Box>
                <Box className="norml_para" sx={{ fontWeight: 400, marginBottom: 2 }}>
                    Guide to help ensure your order meets coverage and documentation requirements.
                </Box>
                <Box className="norml_para" sx={{ fontWeight: 400, marginBottom: 3 }}>
                    Do you order Durable Medical Equipment (DME) for Medicare patients?
                </Box>
            </Box>

        </Box>
      </CardContent>
      <CardActions className="footer_boxx">
        <Typography className="pblished_td" sx={{fontStyle: 'italic'}}>Published Today at 7:30 AM</Typography>
        <Box sx={{
                float: 'right'
            }}>
            <Button className="more_bbtn" size="small" style={{ }}>
            <Typography sx={{fontStyle: 'italic'}}>More {'>'}</Typography>
            </Button>
        </Box>
      </CardActions>
    </Card>
  );
}