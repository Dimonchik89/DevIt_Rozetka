import React, {memo} from "react";
import { Typography } from "@mui/material";
import TextBlock from "../TextBlock/TextBlock";
import { changeTitle } from "../../helper/helper";
import "../Characteristics/characteristics.scss";
import "../../style/helper.scss"

const Description = memo(({selectGood}) => {
    return (
        <div className="mt-50">
            <div>
                <TextBlock title="Описание:" text={changeTitle(selectGood.model)} titleClass="inline" textClass="characteristic__title ml-05" titleVariant="h3" textVariant="h2"/>
            </div>
            <Typography
                variant="h6"
                component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur autem corporis nostrum laborum quas dolore exercitationem blanditiis. Deserunt perspiciatis numquam ipsum obcaecati voluptates inventore dolorum architecto veniam officia minus!
                    Et quidem sint nam sit, ad nihil, vero praesentium dolorem explicabo commodi dolore aliquam tenetur soluta enim culpa harum itaque eos minima repudiandae perspiciatis eum qui! Nam in ratione optio.
                    Reprehenderit, rerum. Vero, nostrum qui. Quas nihil velit, aspernatur ipsum esse voluptas voluptatibus, iure culpa, nemo repudiandae quidem dolorem fuga ut obcaecati? Illo, molestiae fugit ab enim ea quisquam sit.
                    Minima suscipit modi vero odio iure sunt sint, maiores inventore beatae ratione ad culpa saepe eaque nesciunt consequuntur earum debitis. Harum minima expedita animi commodi, ut debitis deserunt doloribus a.
                    Aliquam eveniet nobis veniam similique quibusdam totam nulla a qui voluptates rem ipsa enim, blanditiis debitis maxime minus libero minima neque quasi temporibus harum voluptatem possimus maiores rerum. Maiores, sed!
            </Typography>
        </div>
    )
})
export default Description;