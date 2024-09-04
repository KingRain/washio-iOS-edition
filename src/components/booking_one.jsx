import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Input, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function BookingOne() {
    return (
        <div>
            <div style={{ height: '80vh', padding: 0, margin: 0, position: 'fixed', top: '10vh', left: 0 }}>
                <header className="booking-page-header">
                    <Link to="/GroundFloor">
                        <div className="booking-back-button">
                            <ArrowBack sx={{ color: 'white' }}></ArrowBack>
                        </div>
                    </Link>
                    <div className="booking-page-header-app-name">
                        Book a Slot
                    </div>
                </header>
            </div>
            <div className="booking-input-section">
                <TextField color="white" fullWidth sx={{ border: '1px solid', borderColor: 'white', color: 'white' }} label="Name" variant="outlined" />
            </div>
        </div>
    )
}

export default BookingOne