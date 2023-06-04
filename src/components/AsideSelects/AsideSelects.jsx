import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const AsideSelects = ({title, state, setState, array}) => {
    const handleChange = (event) => {
        if(setState){
            setState(event.target.value);
        }
    };
    
    return (
        <Box sx={{ minWidth: 120 }} className="catalog__aside-slect">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state !== undefined ? state : ""}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">По умолчанию</MenuItem>
                    {array && array.map((item, idx) => (
                        <MenuItem value={item} key={idx}>{
                            item === "asc" ? "По возрастанию цены" : item === "desc" ? "По убыванию цены" : item === "rate" ? "По популярности" : item   
                        }</MenuItem>))}
                </Select>
            </FormControl>
        </Box>    );
};

export default AsideSelects;