import NavBar from "../component/NavBar";
import * as React from "react";
import {Typography, useTheme} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import FooterComponent from "../component/Footer";

function TimeElement(props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={props.color}/>
        <TimelineConnector/>
      </TimelineSeparator>
      <TimelineContent>
        {props.children}
      </TimelineContent>
    </TimelineItem>
  )
}

export default function TimeLine()
{
  const theme = useTheme();

  return (
    <>
      <NavBar title={"ARKultur - Timeline"}/>
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
          >Timeline</Typography>
        </div>
        <div style={{}}>
          <Timeline position="alternate">
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Moonshot</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >September 2021</Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >The Moonshot last two weeks. The first we work on different problematic to find a solution and make a little speech at the end of the day. After a week we choose 3 solution and improve these solution. At the end we have to choose one of these solution that can be our project. And we choose ARKultur. It's the beginning.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Research</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >October - December 2021</Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >The goal now is to check is our solution feasible. To check we've created a questioner and we ask several organisation abour thier potential issue. This experience was very useful to know which tack we have to make first.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Forward</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >December 2021</Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >After all research it time to create a little prototype to show what the final product looks like. We have two week to create this prototype with a presentation at then end. We've created a good prototype that show a good image of what we can have a the end.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Let's work</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >april - june 2022</Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Before we start the reale project we have to define which technologies we will use during the project. It's very important so during these month we try several technologies and choose the best at the end.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Management</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >jully - october 2022</Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >We're going to work several month together so we have to define the rules to work faster. the development has also started.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_past"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Fast Forward</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >november 2022 - january 2023 </Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >It is time to go faster.Tthe past month we work of the organisation of the team, tested our technologies and just started the project. Now we're going deeper to the project by creating our major features (Website, Dashboard, Mobile).</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_now"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Preparing beta (now)</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >february - may 2023 </Typography>
                <Typography
                  color={theme.typography.color}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Our major features is now ready to use we have to prepare our project for a future beta. Working on the user experience and communication between our tester and us. We've improved all our feature and make easier to use.</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_future"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Beta (future)</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >june - sptember 2023 </Typography>
                <Typography
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >We'll see what the future hold for us...</Typography>
              </div>
            </TimeElement>
            <TimeElement
              color={"tm_future"}
            >
              <div>
                <Typography
                  variant={"h4"}
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >Prepare to lunch (future)</Typography>
                <Typography
                  variant={"subtitle2"}
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >october - december 2023 </Typography>
                <Typography
                  color={theme.palette.greyText}
                  style={{marginBottom: "1rem", letterSpacing: "-0.025em"
                  }}
                >We'll see what the future hold for us...</Typography>
              </div>
            </TimeElement>
          </Timeline>
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}