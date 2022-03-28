import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import "./goodsSkeleton.scss";

const GoodSkeleton = () => {
    const content = new Array();
    for(let i = 0; i < 12; i++) {
        content.push(
            <Stack key={`skeleton${i}`}>
                <Skeleton variant="text" width="60%"/>
                <Skeleton variant="text"/>
                <Skeleton variant="rectengular" height={200}/>
            </Stack>
        )
    }
    return (
        <div className="goods-skeleton">
            {content}
        </div>
    )
}
export default GoodSkeleton;