import { Box, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import ReactPlayer from 'react-player';
// import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function One() {

  const navigate = useNavigate();
  const main = (params) => {
    navigate('/app', { replace: true });
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%", minHeight: "auto" }}>
      <ReactPlayer style={{ position: "fixed", zIndex: "-10", left: "49%", overflow: "hidden" }} url="/static/video/2.mp4" playing loop muted width="51%" height="100%" />
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={6} style={{ backgroundColor: "#232323" }}>
          <button style={{ width: "100px", height: "100px", backgroundColor: "#ff1650", border: "none", color: "white", fontSize: "25px" }} onClick={(e) => main()}>
            <label>הבית חזור</label>
            <label>לדף</label>
          </button>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <img alt="prop" src="static/image/six-2.png" ></img>
          </Grid><br />
          <Grid justifyContent="center" style={{ padding: "0% 10%" }} item xs={12}>
            {/* <img alt="prop" src="static/image/Group 121.png"></img> */}
            <hr style={{ borderColor: "#fcb038" }}></hr>
            <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
              <Typography style={{ color: "#c8c8c8", fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl", display: "contents", fontWeight: "bolder", color: "#fcb038" }}>תנאי מימון 80/20 + פטור מהמדד לשנה + פטור משכ"ט עו"ד + הטבה בשינויי דיירים!</Typography>
            </Grid>
            <hr style={{ borderColor: "#fcb038" }}></hr>
          </Grid>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <Typography style={{ color: "white", fontSize: "25px", fontWeight: "bolder", direction: "rtl" }}>הזדמנות נדירה לקוטג׳ בגוש דן! - הקוטג'ים באר יעקב</Typography>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <Typography style={{ color: "#c8c8c8", fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl" }}>תמיד חלמתם על קוטג’ עם גינה למשפחה שלכם… עכשיו יש לכם חלום הזדמנויות קצר להגשים אותו! נותרו מספר קוטג’ים פרימיום ברוטשטיין הירוקה באר יעקב עם מפרט כל כך עשיר ואיכותי שלא תצטרכו לשדרג.
              אל תיקחו את הזמן, קחו החלטה. מס׳ הדירות מוגבל!</Typography>
          </Grid>
          <Grid justifyContent="center" style={{ display: "grid" }} item xs={12}>
            <Typography style={{ color: "white", fontSize: "25px", fontWeight: "bolder", direction: "rtl" }}>אל תיקחו את הזמן, קחו החלטה. מס' הדירות מוגבל!</Typography>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <Typography style={{ color: "#c8c8c8", fontSize: "25px", width: "80%", padding: "1% 10%", textAlign: "center", direction: "rtl" }}>קוטג׳ים החל מ-</Typography>
          </Grid>
          <Grid justifyContent="center" style={{ display: "flex" }} item xs={12}>
            <Typography style={{ color: "#c8c8c8", fontSize: "40px", fontWeight: "bolder", width: "80%", paddingTop: "0px", textAlign: "center", color: "#fcb038", direction: "rtl" }}>₪4,780,000</Typography>
          </Grid>
          <Grid justifyContent="center" style={{ padding: "0% 10%" }} item xs={12}>
            <Typography style={{ textAlign: "right", color: "white" }}>רוצה לשמוע עוד?מלא פרטים ונחזור אלייך בהקדם</Typography>

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
                {/* <img alt="prop" src="static/image/root.png"></img> */}
                <div className="input_div" style={{ width: "100%" }}>
                  <label className="input_label" ><span>{`<`}</span>פרויקט</label>
                  <input className="input_style" type="text"></input>
                </div>
              </Stack>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={8} spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "ltr" }} spacing={2}>
                <img alt="prop" src="static/image/root.png"></img>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                <img alt="prop" src="static/image/six-1.png"></img>
              </Stack>
            </Stack>
            <Typography style={{ justifyContent: "center", marginTop: "5%", paddingBottom: "1%", display: "flex", color: "white", direction: "rtl" }}>ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: "flex", justifyContent: "right", backgroundSize: "cover" }}>
          <Stack paddingTop={2} spacing={2} style={{ justifyContent: "center" }}>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered">
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/one"><img alt="prop" src="static/image/button1_1.png" ></img></a>
              </div>
            </div>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#d1313d" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/two"><img alt="prop" src="static/image/button2_2.png"></img></a>
              </div>
            </div>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#21bf73" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/three"><img alt="prop" src="static/image/button3_3.png"></img></a>
              </div>
            </div>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#cb0671" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/four"><img alt="prop" src="static/image/button4_4.png"></img></a>
              </div>
            </div>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#524641" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/five"><img alt="prop" src="static/image/button5_5.png"></img></a>
              </div>
            </div>
            <div>
              <div style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#fcb038" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/six"><img alt="prop" src="static/image/button7_7.png"></img></a>
              </div>
            </div>
            <div>
              <div className="buttonhoverd" style={{ display: "inline-flex", float: "right", color: "white" }}>
                <div className="hoveredParent1"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                  <div className="hovered" style={{ backgroundColor: "#fc5e00" }}>
                    <label>להטבות</label><br />
                    <label>{`<<`}</label>
                    <label >בנתניה</label><br />
                    <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <a href="/seven"><img alt="prop" src="static/image/button6_6.png"></img></a>
              </div>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
