import { Box, Grid, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import DashMenu from './DashBoardMenu'
export default function DashboardApp() {
  return (
    <Grid container>
      <ReactPlayer className="main_player" url="/static/video/2.mp4" playing loop muted width="100%" height="100%" />
      <Grid item className="main_grid">
        <Grid item style={{ boxShadow: "0px 0px 145px 86px black" }}></Grid>
        <Box height="10%" display="flex" flexDirection="column" alignItems="center" color="#fff" style={{ top: "7px", position: "relative" }}  >
          <Typography style={{ fontSize: "29px", width: "100%", justifyContent: "center", display: "flex" }}>
            {/* eslint-disable-next-line */}
            <marquee style={{ fontFamily: "COLBO" }}>פטור ממדד לשכה / הטבה בשינויי דיירים! / ליווי אדריכלי לעיצוב / פטור משכ"טעו"ד / תנאי מימון 20/80 / פטור ממדד לשכה! / ליווי אדריכלי לעיצוב הדירה / הטבה בשיכויי</marquee>
          </Typography>
        </Box>
        <Box marginTop="27%" display="flex" flexDirection="column" alignItems="center" color="#fff" style={{ backgroundColor: '#232323', boxShadow: "0px -31px 126px 84px rgb(35 35 35)", height: "auto" }}>
          <Grid container style={{ width: "73vw" }}>
            <Grid item xs={7} style={{ display: "grid", justifyContent: "right", marginTop: "-2%", paddingRight: "6%", fontFamily: "COLBO" }}>
              <div className = "main_click">
                <img alt="prop" src="static/image/title1.png"></img>
                <img className = "mclock" alt="prop" src="static/image/clock.gif"></img>
              </div>
              {/* <p style={{ direction: "rtl", fontSize: "3.4vw" }}>רוטשן</p> */}
              <p style={{ direction: "rtl", fontSize: "3.4vw", height: "3.4vw" }}>הטבות סופשנה<span style={{ fontSize: "3.4vw", fontFamily: "COLBO", color: "#ff1650" }}>חוזרות ביג טיים!</span> </p>
              <p style={{ direction: "rtl", fontSize: "1.5vw" }}>רוטשטיין עם הטבות גדולות מתמיד בכל הפרויקטים שלנו ברחבי הארץ</p>
              <br />
              <br />
              <Typography style={{ textAlign: "right", fontFamily: "COLBO" }}>רוצה לשמוע עוד?מלא פרטים ונחזור אלייך בהקדם</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <div className="input_div">
                  <label className="input_label"><span>:</span>מייל</label>
                  <input className="input_style" type="text"></input>
                </div>
                <div className="input_div">
                  <label className="input_label"><span>:</span>שם מלא</label>
                  <input className="input_style" type="text"></input>
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <div className="input_div">
                  <label className="input_label"><span>{`<`}</span>פרויקט</label>
                  <input className="input_style" type="text"></input>
                </div>
                <div className="input_div">
                  <label className="input_label"><span>:</span>טלפון</label>
                  <input className="input_style" type="text"></input>
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={2} spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", justifyContent: "space-between" }} spacing={2}>
                  <button style={{ width: "100px", backgroundColor: "#ff1650", border: "none", color: "white", borderTopRightRadius: "15px", fontSize: "25px" }}>שלח</button>
                  <div style={{ display: "inline-block", }}>
                    <label style={{ fontFamily: "COLBO" }}>אני מאשר קבלת מידע שיווקי</label>&nbsp; &nbsp; &nbsp;
                    <input htmlFor="html" type="checkbox" id="html" />
                  </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                  <img alt="prop" src="static/image/root.png"></img>
                </Stack>
              </Stack>
              <p style={{ justifyContent: "center", marginTop: "5%", paddingBottom: "1%", display: "inline-flex", direction: "rtl" }}>ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד!</p>
            </Grid>
            <Grid item xs={5} style={{ display: "flex" }} >
              <Stack style={{ width: "50%" }} paddingTop={2} spacing={2}>
                <DashMenu flag={0} />
              </Stack>
              <Stack style={{ width: "50%", float: "left", display: "flex", marginTop: "-5%" }} spacing={2}>
                <DashMenu flag={1} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid >
  );
}
