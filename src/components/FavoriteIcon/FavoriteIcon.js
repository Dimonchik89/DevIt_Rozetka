import React from "react";
import {handleChangeBoolean} from "../../hook/useChange";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const FavoriteIconButton = () => {
    const favorite = handleChangeBoolean();
    const favoriteIcon = favorite.value ? <FavoriteIcon fontSize="large" sx={{ color: "orange" }}/> : <FavoriteBorderIcon fontSize="large" sx={{ color: "orange" }}/>;
    return (
        <IconButton
            onClick={favorite.change}
        >
            {favoriteIcon}
        </IconButton>
    )
}

export default FavoriteIconButton;