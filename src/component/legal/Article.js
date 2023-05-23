import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

export default function Article(props)
{
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <div>
            <h3
                style={{
                    color: theme.typography.color,
                    marginBottom: "1rem",
                    fontSize: "3.75rem",
                    letterSpacing: "-0.025em",
                    fontWeight: 800
                }}
            >{t(props.title)}</h3>
            {props.lines.map(
                (line, index) => (
                    <p
                        key={index}
                        style={{
                            fontSize: "1.25rem",
                            lineHeightStep: "1.75rem",
                            fontWeight: 300,
                            color: theme.palette.greyText,
                textAlign: "justify"
            }}
                    >{t(line)}</p>
                )
            )}
        </div>
    );
}