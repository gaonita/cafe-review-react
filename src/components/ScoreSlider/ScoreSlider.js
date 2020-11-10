import React, {useState} from 'react';
import {Slider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const ScoreSlider = ({onValueChange}) => {
    const [value, setValue] = useState()
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <div>
            <Typography id="discrete-slider" gutterBottom style={{marginBottom:'40px', textAlign:'left'}}>
                Sustainability Level
            </Typography>
            <Slider defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby='discrete-slider-always'
                    step={1}
                    marks={marks}
                    valueLabelDisplay={'on'}
                    min={0}
                    max={5}
                    value={value}
                    color={"primary"}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                        onValueChange(newValue)
                    }}
            />
        </div>

    );
};

export default ScoreSlider;
