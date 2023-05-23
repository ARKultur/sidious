import NavBar from "../component/NavBar";
import * as React from "react";
import {Typography, useTheme} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import FooterComponent from "../component/Footer";
import {useTranslation} from "react-i18next";

function TimeElement(props) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={props.color}/>
        <TimelineConnector/>
      </TimelineSeparator>
      <TimelineContent>
        <div>
          <Typography
            variant={"h4"}
            color={theme.typography.color}
            style={{marginBottom: "1rem", letterSpacing: "-0.025em"
            }}
          >{t(props.title)}</Typography>
          <Typography
            variant={"subtitle2"}
            color={theme.typography.color}
            style={{marginBottom: "1rem", letterSpacing: "-0.025em"
            }}
          >{t(props.time)}</Typography>
          <Typography
            color={theme.typography.color}
            style={{marginBottom: "1rem", letterSpacing: "-0.025em"
            }}
          >{t(props.text)}</Typography>
        </div>
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
        <div>
          <Timeline position="alternate">
            <TimeElement
              color={"tm_past"}
              title={"timeline.step1.title"}
              time={"timeline.step1.time"}
              text={"timeline.step1.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step2.title"}
              time={"timeline.step2.time"}
              text={"timeline.step2.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step3.title"}
              time={"timeline.step3.time"}
              text={"timeline.step3.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step4.title"}
              time={"timeline.step4.time"}
              text={"timeline.step4.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step5.title"}
              time={"timeline.step5.time"}
              text={"timeline.step5.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step6.title"}
              time={"timeline.step6.time"}
              text={"timeline.step6.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step7.title"}
              time={"timeline.step7.time"}
              text={"timeline.step7.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step8.title"}
              time={"timeline.step8.time"}
              text={"timeline.step8.text"}
            />
            <TimeElement
              color={"tm_past"}
              title={"timeline.step9.title"}
              time={"timeline.step9.time"}
              text={"timeline.step9.text"}
            />
          </Timeline>
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}