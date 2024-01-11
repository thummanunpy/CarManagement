import DialogContent from '@mui/material/DialogContent';
import { Car } from "../types";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

type DialogFormProps = {
    car: Car;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CarDialogContent({ car, handleChange }: DialogFormProps) {
    return (
        <DialogContent>
            <Stack spacing={2} mt={1}>
                <TextField placeholder="Brand" name="brand"
                value={car.brand} onChange={handleChange}/><br/>
                <TextField placeholder="Model" name="model"
                value={car.model} onChange={handleChange}/><br/>
                <TextField placeholder="Color" name="color"
                value={car.color} onChange={handleChange}/><br/>
                <TextField placeholder="Year" name="modelYear"
                value={car.modelYear} onChange={handleChange}/><br/>
                <TextField placeholder="Reg.nr." name="registrationNumber"
                value={car.registrationNumber} onChange={handleChange}/><br/>
                <TextField placeholder="Price" name="price"
                value={car.price} onChange={handleChange}/><br/>
            </Stack>
      </DialogContent>
    );
  }
  export default CarDialogContent;