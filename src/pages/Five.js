import { Box, Grid, Stack } from '@mui/material';
import ReactPlayer from 'react-player';
import MenuBar from './MenuBar';
import { useHistory } from 'react-router-dom';

export default function One() {

  const history = useHistory();
  const main = (params) => {
    history.push('/app');
  }

  return (
    <Box className="box2">
      <ReactPlayer className="video_player" url="/static/video/3.mp4" playing loop muted width="51%" height="100%" />
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={6} style={{ backgroundColor: "#232323" }}>
          <button className="main_button" onClick={(e) => main()}>
            <label>הבית חזור</label>
            <label>לדף</label>
          </button>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <div className="main_click">
              <img alt="prop" src="static/image/three.png" ></img>
              <img alt="prop" className="mclock" src="static/image/clock.gif" ></img>
            </div>
          </Grid><br />
          <Grid justifyContent="center" style={{ padding: "0% 10%" }} item xs={12}>
            {/* <img alt="prop" src="static/image/Group 121.png"></img> */}
            <hr style={{ borderColor: "#dc7c8d" }}></hr>
            <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
              <p style={{ fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl", fontWeight: "bolder", color: "#dc7c8d" }}>תנאי מימון 20/80 + פטור משכ”ט עו”ד + פטור לשנה מהמדד + הטבה בשינויי דיירים!</p>
            </Grid>
            <hr style={{ borderColor: "#dc7c8d" }}></hr>
          </Grid>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <p style={{ color: "white", fontSize: "25px", fontWeight: "bolder", direction: "rtl" }}>יצירת מגורים מעוררת השראה בפרוייקט פורטרט</p>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <p style={{ color: "#c8c8c8", fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl" }}>חברת רוטשטיין יוצרת עבורכם איכות חיים חדשה בשכונה הוותיקה והמבוקשת נווה רסקו - רמת השרון. בואו להתרשם מפרויקט בוטיק חדש ויפהפה ובו דירות גדולות במיוחד עם מרפסות מרווחות, פטיו שטוף שמש מרהיב ותכנון אדריכלי יוצא דופן.
            </p>
          </Grid>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <p style={{ color: "white", fontSize: "25px", fontWeight: "bolder", direction: "rtl" }}>אל תיקחו את הזמן, קחו החלטה. מס' הדירות מוגבל!</p>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <p style={{ color: "#c8c8c8", fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl" }}>147 מ"ר בעיצוב אישי</p>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <p style={{ fontSize: "40px", fontWeight: "bolder", width: "80%", paddingTop: "0px", textAlign: "center", color: "#dc7c8d", direction: "rtl" }}>₪4,680,000</p>
          </Grid>
          <Grid justifyContent="center" style={{ padding: "0% 10%" }} item xs={12}>
            <p style={{ textAlign: "right", color: "white" }}>רוצה לשמוע עוד?מלא פרטים ונחזור אלייך בהקדם</p>

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
            <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={2} spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", justifyContent: "space-between" }} spacing={2}>
                <button style={{ width: "100px", backgroundColor: "#ff1650", border: "none", color: "white", borderTopRightRadius: "15px", fontSize: "25px" }}>שלח</button>
                <div style={{ display: "inline-block" }}>
                  <label style={{ color: "white" }}>אני מאשר קבלת מידע שיווקי</label>&nbsp; &nbsp; &nbsp;
                  <input htmlFor="html" type="checkbox" id="html" />
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                <div className="input_div" style={{ width: "100%" }}>
                  <label className="input_label" ><span>{`<`}</span>פרויקט</label>
                  <input className="input_style" type="text"></input>
                </div>
              </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={8} spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", height: "100%", direction: "ltr" }} spacing={2}>
                <img style={{ height: "100%" }} alt="prop" src="static/image/root.png"></img>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                <img alt="prop" src="static/image/five-1.png"></img>
              </Stack>
            </Stack>
            <p style={{ justifyContent: "center", marginTop: "5%", paddingBottom: "1%", display: "flex", color: "white", direction: "rtl" }}>ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד</p>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: "flex", justifyContent: "right", backgroundSize: "cover" }}>
          <Stack paddingTop={2} spacing={2} style={{ justifyContent: "center", position: "fixed", height: "100%" }}>
            <MenuBar flag={4} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
