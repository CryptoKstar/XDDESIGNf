import { Box, Grid, Stack } from '@mui/material';
// import ReactPlayer from 'react-player';
import MenuBar from './MenuBar';
import { useHistory } from 'react-router-dom';

export default function One() {

  const history = useHistory();
  const main = (params) => {
    history.push('/app');
  }
  return (
    <Box className="box2">
      {/* <ReactPlayer className="video_player" url="/static/video/2.mp4" playing loop muted /> */}
      <Grid container spacing={2} style={{ height: "102vh" }}>
        <Grid item xs={6} style={{ backgroundColor: "#232323" }}>
          <button className="main_button" onClick={(e) => main()}>
            <label>הבית חזור</label>
            <label>לדף</label>
          </button>
          <Grid className="grid_title" item xs={12}>
            <div className="main_click">
              <img alt="prop" src="static/image/one.png" ></img>
              <img alt="prop" className="mclock" src="static/image/clock.gif" ></img>
            </div>
            <p className="grid_title_1">באר יעקב</p>
          </Grid><br />
          <Grid className="grid_header" item xs={12}>
            <hr style={{ borderColor: "#3ab6c9" }}></hr>
            <Grid className="grid_header_1" item xs={12}>
              <p className="grid_header1" style={{ color: "#3ab6c9" }}>תנאי מימון 20/80 + פטור ממדד לשנה + פטור משכ"ט עו"ד + הטבה בשינויי דיירים!</p>
            </Grid>
            <hr style={{ borderColor: "#3ab6c9" }}></hr>
          </Grid>
          <Grid className="grid_title" item xs={12}>
            <p className="text_header">לצאת מהעיר, ולהישאר בה - רוטשטיין באיינשטיין </p>
          </Grid>
          <Grid className="grid_header_1" item xs={12}>
            <p className="text_body">במיקום מושלם ושקט בנתניה צפון, בין הנופים הפתוחים של מושב אביחיל המבוקש ופארק איינשטיין רחב הידיים, קם פרויקט רוטשטיין באיינשטיין. שני מגדלי פרימיום עם מפרט עשיר ואיכותי המציעים דירות מעוצבות ומתוכננות בקפידה, מועדון דיירים, גינה מטופחת, לובי מפואר ו – 3 מעליות בכל בניין. </p>
          </Grid>
          <Grid className="grid_title" item xs={12}>
            <p className="text_header">אל תיקחו את הזמן, קחו החלטה. מס' הדירות מוגבל!</p>
          </Grid>
          <Grid className="grid_header" item xs={12}>
            <p className="bottom_text_1">3,4,5 חד׳ החל מ-</p>
            <p className="bottom_text_2" style={{ color: "#3ab6c9" }} >₪1,870,000</p>
          </Grid>
          <Grid justifyContent="center" style={{ padding: "0vw 5vw", paddingTop: "2vw" }} item xs={12}>
            <p className="bottom_text_3">רוצה לשמוע עוד?מלא פרטים ונחזור אלייך בהקדם</p>

            <Stack direction={{ xs: 'column', sm: 'row' }} className="grid_input_1" spacing={2}>
              <div className="input_div">
                <label className="input_label"><span>:</span>מייל</label>
                <input className="input_style" type="text"></input>
              </div>
              <div className="input_div">
                <label className="input_label"><span>:</span>שם מלא</label>
                <input className="input_style" type="text"></input>
              </div>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={2} spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", justifyContent: "space-between" }}>
                <button className="button_1">שלח</button>
                <div className="button_2">
                  <label className="bottom_text_3" >אני מאשר קבלת מידע שיווקי</label>
                  <input htmlFor="html" type="checkbox" id="html" />
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl", marginTop: "-1vw" }} spacing={2}>
                {/* <img alt="prop" src="static/image/root.png"></img> */}
                <div className="input_div" style={{ width: "100%" }}>
                  <label className="input_label" >טלפון :</label>
                  <input className="input_style" type="text"></input>
                </div>
              </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} style={{ alignItems: "center", padding: "1vw" }} paddingTop={8} spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", height: "100%", direction: "ltr" }} spacing={2}>
                <img style={{ height: "100%" }} alt="prop" src="static/image/root.png"></img>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                <img alt="prop" src="static/image/one_root.png"></img>
              </Stack>
            </Stack>
            <p className="bottom_text_4" >ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד!</p>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: "flex", justifyContent: "right", backgroundSize: "cover" }} className="background">
          <Stack paddingTop={2} spacing={2} style={{ justifyContent: "center", position: "fixed", height: "100%" }} >
            <MenuBar flag={0} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
