const buttons1 = [
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/one", src: "static/image/button1_1.png", button: "static/image/1.png", backgroundcolor: "#036473" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/two", src: "static/image/button2_2.png", button: "static/image/2.png", backgroundcolor: "#d1313d" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/three", src: "static/image/button3_3.png", button: "static/image/3.png", backgroundcolor: "#21bf73" },
]
const buttons2 = [
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/four", src: "static/image/button4_4.png", button: "static/image/7.png", backgroundcolor: "#cb0671" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/five", src: "static/image/button5_5.png", button: "static/image/5.png", backgroundcolor: "#524641" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/six", src: "static/image/button6_6.png", button: "static/image/6.png", backgroundcolor: "#fcb038" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/seven", src: "static/image/button7_7.png", button: "static/image/7.png", backgroundcolor: "#fc5e00" },
]
const buttons = [
  buttons1,
  buttons2
]
export default function DashBoardMenu({ flag }) {

  return (
    <>
      {
        buttons[flag].map((item, key) => {
          return (
            <div key={key}>
              <div style={{ display: "inline-flex" }}>
                <div className="hoveredParent"><a href={item.href}><img alt="prop" src={item.button} /></a>
                  <div style={{ backgroundColor: item.backgroundcolor, fontWeight: "bolder" }} className="hovered">
                    <label>להטבות</label><br />
                    <label >בנתניה{`>>`}</label><br />
                    <label>לצאת מהעיר, ולהישאר בה</label>
                  </div>
                </div>
                <img alt="prop" style={{ height: "5vw" }} src={item.src}></img>
              </div>
            </div>
          )
        })
      }
    </>
  );
}