'use client';

import { Box, Button, CircularProgress, Paper, Typography, Link as MuiLink } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/form/input';
import Link from 'next/link';

interface IFormData {
  password: string;
  email: string;
}

export function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IFormData>({
    defaultValues: {
      password: '',
      email: ''
    }
  });

  const onSubmit: SubmitHandler<IFormData> = async data => {
    console.log(data);
  };

  return (
    <Box
      px={{ xs: 1, sm: 2 }}
      width={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper sx={{ padding: 4, width: { xs: '100%', md: 500 } }}>
        <Box mb={4}>
          <Typography align="center" variant="h3">
            Login
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} label="Email" errors={errors} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Password" type="password" errors={errors} />
            )}
          />
          <Box width={1} display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" sx={{ width: 1 }} disabled={isSubmitting}>
              {!isSubmitting ? 'Submit' : <CircularProgress size={25} />}
            </Button>
          </Box>
        </form>
        <Box width={1} display="flex" justifyContent="center" mt={2}>
          <MuiLink component={Link} href="/signup">
            Or register
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignupForm;
