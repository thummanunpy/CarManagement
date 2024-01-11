import { Dialog } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Car } from "../types";
import { useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCar } from "../api/CarApi";
import CarDialogContent from './CarDialogContent';
import Button from '@mui/material/Button';

function AddCar() {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState<Car>({
        brand: '',
        model: '',
        color: '',
        registrationNumber: '',
        modelYear: 0,
        price: 0
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setCar({...car, [event.target.name]:
            event.target.value});
    }

    const queryClient = useQueryClient();

    const { mutate} = useMutation(addCar, {
        onSuccess: () => {
            queryClient.invalidateQueries(["cars"]);
        },
        onError: (error) => {
            console.error(error);
        }
    })
    const handleSave = () => {
        mutate(car);   
        setCar({ brand: '', model: '', color: '',  registrationNumber:'',
                 modelYear: 0, price: 0 });
        handleClose();
      }
    
    return(
        <>
            <Button onClick={handleClickOpen}>New Car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <CarDialogContent car={car} handleChange={handleChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddCar;

