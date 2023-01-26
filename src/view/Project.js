import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Typography, useTheme} from "@mui/material";
import Normandie from "../resources/images/Normandie.jpg"
import Fourviere from "../resources/images/colline-fourviere-lyon.jpg"
import Epitech from "../resources/images/Campus_Lyon.jpg"

function Section(props)
{
  const theme = useTheme();

  return (
    <div
      style={{marginBottom: "2rem"}}
    >
      <Typography
        variant={"h1"}
        color={theme.typography.color}
        style={{marginBottom: "1rem", fontSize: "3.75rem",
          letterSpacing: "-0.025em", fontWeight: 800
        }}
      >{props.title}</Typography>
      <Typography
        color={theme.palette.greyText}
        style={{fontSize: "1.25rem", lineHeightStep: "1.75rem",
          fontWeight: 300, maxWidth: "75rem", marginBottom: "0.75rem"
        }}
      >{props.text}</Typography>
      <img
        src={props.image}
        alt={props.alt}
      />
    </div>
  )
}

export default function Project()
{
    const theme = useTheme();
    return (
        <div>
            <NavBar title="ARKultur - Our Project"/>
            <div style={{
                paddingTop: "7rem", paddingLeft: "1rem",
                paddingRight: "1rem", maxWidth: "1280px",
                marginLeft: "auto", marginRight: "auto"
            }}>
              <div style={{marginBottom: "2rem"}}>
                <Typography
                  variant={"h1"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                    fontWeight: 800
                }}
                >ARKultur</Typography>
                <Typography
                  color={theme.palette.greyText}
                  style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                    maxWidth: "42rem"
                }}
                >ARKultur is a project made by 7 student from Epitech as a part of Epitech Innovative Project (EIP), our project graduation.</Typography>

              </div>
              <Section
                title={"Observation"}
                text={"The idea of the project emerges juste after the third wave of Covid-19 in 2021. The impact was hard for every one, and mostly for the culture. " +
                  "Visiting a place can be annoying for children, information may not be easy to read for people with disabilities, or just missing. " +
                  "Without theses information we loose our history. It's a big issue and we have to change it."}
                image={Normandie}
                alt={"Normandie's photo"}
              />
              <Section
                title={"Solution"}
                text={"ARKultur is here to change how we visit a place! With our mobile application can can have an access to all available data of a museum. " +
                  "You can see in a map all cultural place around you and discover something you never notice. Several guide are available for everyone. " +
                  "A treasure hunter or a more classical guide there's something for everyone. You can also find an Augmented Reality (AR) view of the " +
                  "place to help you to catch every information even if they are physically inaccessible."}
                image={Fourviere}
                alt={"Fourvière's photo"}
              />
              <Section
                title={"Observation"}
                text={"Epitech is a school in 5 years, and one in a foreign country, specialized in computer science. On our 3th year we start our EIP (Epitech Innovative Project) " +
                  "which will last 3 years. The goal of this project is to create a real project and manage him like a project in a company. We have to be innovative and creative " +
                  "to create a project that bring something new in our world."}
                image={Epitech}
                alt={"Epitech Lyon's photo"}
              />
            </div>
            <FooterComponent/>
        </div>
    )
}