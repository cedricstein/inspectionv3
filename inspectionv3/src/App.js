import React, { useState, useRef } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const items = [
  { name: "APPLIANCE ADJUSTMENTS", price: "156.00", category: "Misc" },
  { name: "BATH - F & I TOILET SEAT", price: "104.00", category: "bath" },
  { name: "BATH - REGROUT TILES", price: "338.00", category: "bath" },
  {
    name: "BATH - REMOVE & REINSTALL TOILET",
    price: "208.00",
    category: "bath",
  },
  {
    name: "BATH - REMOVE AND REPLACE BATH SINK",
    price: "364.00",
    category: "bath",
  },
  { name: "BATH - S&I FAUCET ONLY", price: "234.00", category: "bath" },
  { name: "BATH - S&I SHOWER ROD", price: "85.00", category: "bath" },
  {
    name: "BATH - S&I SHUTOFF VALVE - TUB SURROUND",
    price: "125.00",
    category: "bath",
  },
  {
    name: "BATH - S&I SHUTOFF VALVE - VANITY",
    price: "88.40",
    category: "bath",
  },
  {
    name: "BATH - S&I SINK & FAUCET SET ONLY",
    price: "780.00",
    category: "bath",
  },
  {
    name: "BATH - S&I STD KICK PLATES (MATCH)",
    price: "6.24",
    category: "bath",
  },
  {
    name: "BATH - S&I STD TOILET PAPER HOLDER",
    price: "65.00",
    category: "bath",
  },
  { name: "BATH - S&I STD TOWEL BAR", price: "75.00", category: "bath" },
  {
    name: "BATH - S&I STD VANITY BASE 1-3FT - WHITE",
    price: "624.00",
    category: "bath",
  },
  { name: "BATH - S&I TOILET 6L TANK", price: "435.00", category: "bath" },
  {
    name: "BATH - S&I TUB SILICONE CAULKING",
    price: "78.00",
    category: "bath",
  },
  {
    name: "BATH - S&I TUB SRND ALL INC LH - WHITE",
    price: "4,190.00",
    category: "bath",
  },
  {
    name: "BATH - S&I TUB SRND ALL INC RH - WHITE",
    price: "4,190.00",
    category: "bath",
  },
  {
    name: "BATH - S&I TUB SURROUND ONLY - WHITE",
    price: "2,800.00",
    category: "bath",
  },
  {
    name: "BATH - S&I UPG WALL CAB COLLETTE - WHITE",
    price: "338.00",
    category: "bath",
  },
  {
    name: "BATH - S&I VANITY SINK & REUSE TAP SET",
    price: "442.00",
    category: "bath",
  },
  {
    name: "BATH - S&I VANITY TOP BY LINEAR FOOT",
    price: "80.00",
    category: "bath",
  },
  {
    name: "BATH - STRIP & REGLAZE TUB & SILICONE",
    price: "495.00",
    category: "bath",
  },
  { name: "BATH- S&I SHOWER HEAD ONLY", price: "78.00", category: "bath" },
  {
    name: "BATH-S&I SELECT EXHAUST FAN & VENT SOCFM",
    price: "190.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT FAUCET RINZA ONLY",
    price: "390.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT GLASS SHOWER DOOR 39",
    price: "830.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT PLUMBING MOD FOR VANITY",
    price: "295.00",
    category: "bath",
  },
  { name: "BATH-S&I SELECT SHOWER HEAD", price: "100.00", category: "bath" },
  {
    name: "BATH-S&I SELECT TUB SRND ALL INC LH-SMOK",
    price: "4,995.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT TUB SRND ALL INC RH-SMOK",
    price: "4,995.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT TUB SRND ONLY-SMOKE",
    price: "3,300.00",
    category: "bath",
  },
  {
    name: 'BATH-S&I SELECT VANITY COMBO 24"',
    price: "755.00",
    category: "bath",
  },
  {
    name: 'BATH-S&I SELECT VANITY COMBO 30"',
    price: "850.00",
    category: "bath",
  },
  {
    name: "BATH-S&I SELECT VANITY COMBO 36°",
    price: "900.00",
    category: "bath",
  },
  {
    name: 'BATH-S&I SELECT VANITY COMBO 48"',
    price: "1,425.00",
    category: "bath",
  },
  {
    name: "CAULKING/SILICONE ADJUSTMENTS",
    price: "208.00",
    category: "mixte",
  },

  { name: "CLEAN - 1 BEDROOM CARPET", price: "498.75", category: "nettoyage" },
  { name: "CLEAN - 1 BEDROOM SUITE", price: "425.88", category: "nettoyage" },
  { name: "CLEAN - 2 BEDROOM CARPET", price: "382.20", category: "nettoyage" },
  { name: "CLEAN - 2 BEDROOM SUITE", price: "491.40", category: "nettoyage" },
  { name: "CLEAN - 3 BEDROOM CARPET", price: "436.80", category: "nettoyage" },
  { name: "CLEAN - 3 BEDROOM SUITE", price: "600.60", category: "nettoyage" },
  { name: "CLEAN - BACHELOR CARPET", price: "420.00", category: "nettoyage" },
  { name: "CLEAN - BACHELOR SUITE", price: "436.80", category: "nettoyage" },
  {
    name: "CLEAN - JR 1 BEDROOM CARPET",
    price: "251.16",
    category: "nettoyage",
  },
  {
    name: "CLEAN - JR 1 BEDROOM SUITE",
    price: "464.10",
    category: "nettoyage",
  },

  { name: "CLOSET ADJUSTMENTS", price: "156.00", category: "garde robe" },
  {
    name: "CLOSET SHELF BY LINEAR FOOT - SUP & INST",
    price: "15.60",
    category: "garde robe",
  },
  {
    name: "DOOR ADJUSTMENTS(NOT CABINET DOORS)",
    price: "156.00",
    category: "porte",
  },
  { name: "DOORS - S&I ACCESS DOOR 24X24", price: "130.00", category: "porte" },
  {
    name: "DOORS - S&1 BULKHEAD, BIFOLD CLOSET",
    price: "416.00",
    category: "porte",
  },
  { name: "DOORS - S&I DOOR STOPPER", price: "25.00", category: "porte" },
  {
    name: 'DOORS - S&I SM STD BIFO 30"- 36"W & 80"H',
    price: "348.40",
    category: "porte",
  },
  {
    name: "DOORS - S&I STD PASSAGE LEVER NICKEL",
    price: "98.80",
    category: "porte",
  },
  {
    name: "DOORS - S&I STD PRIVACY LEVER NICKEL",
    price: "98.80",
    category: "porte",
  },
  {
    name: 'DOORS - S&I STD SLIDERS UP TO 48"W X 80"',
    price: "442.00",
    category: "porte",
  },
  {
    name: "DOORS - S&I UPG BED & BATH COLONIAL",
    price: "280.00",
    category: "porte",
  },
  { name: "DOORS - STD CLOSET ROD", price: "67.60", category: "porte" },
  {
    name: "DOORS-S&I SELECT BED & BATH LINCON",
    price: "355.00",
    category: "porte",
  },
  {
    name: 'DOORS-S&I SELECT BIFO 30"-36"W&:80"H',
    price: "348.00",
    category: "porte",
  },
  {
    name: "DOORS-S&I SELECT PASSAGE LEVER NICKEL",
    price: "98.80",
    category: "porte",
  },
  {
    name: "DOORS-S&I SELECT PRIVACY LEVER NICKEL",
    price: "98.80",
    category: "porte",
  },
  { name: "FLOOR - REPAIR PARQUET", price: "20.80", category: "plancher" },
  {
    name: "FLOOR - S&I QUARTER ROUND MULTI MED FLOOR",
    price: "3.12",
    category: "plancher",
  },
  {
    name: "FLOOR - S&I STD IRANSITION STRIPS",
    price: "75.00",
    category: "plancher",
  },
  {
    name: 'FLOOR - S&I VINYL 4" BASEBOARD',
    price: "5.20",
    category: "plancher",
  },
  {
    name: "FLOOR - SAND & REFINISH 1 BEDROOM",
    price: "1,352.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SAND & REFINISH 2 BEDROOM",
    price: "1,820.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SAND & REFINISH 3 BEDROOM",
    price: "2,000.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SAND & REFINISH BACHELOR",
    price: "936.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SAND & REFINISH JR 1 BEDROOM",
    price: "1,144.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SCREEN & BUFFING BACHELOR",
    price: "494.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SCREEN/BUFF VARNISH 1 BEDROOM",
    price: "754.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SCREEN/BUFF VARNISH 2 BEDROOM",
    price: "936.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SCREEN/BUFF VARNISH 3 BEDROOM",
    price: "1,300.00",
    category: "plancher",
  },
  {
    name: "FLOOR - SCREEN/BUFF VARNISH JR 1 BEDROOM",
    price: "520.00",
    category: "plancher",
  },
  {
    name: "FLOOR - S&/ WET CEMENT LIGHT GREY 12X24",
    price: "22.75",
    category: "plancher",
  },
  {
    name: "FLOOR - S&I ELEMENT PE14 GREY 12X24",
    price: "22.751",
    category: "plancher",
  },
  {
    name: "FLOOR - S&I ELEMENT PEI2 TAUPE 12X24",
    price: "22.75",
    category: "plancher",
  },
  {
    name: "FLOOR - S&I SELECT FODER SMOKE 12x35",
    price: "22.75",
    category: "plancher",
  },
  {
    name: "FLOOR - S&1 WET CEMENT DARK GREY 12X24",
    price: "22.75",
    category: "plancher",
  },

  { name: "GC- ADDITIONAL SERVICE PER QUOTE", price: "0.00" },

  {
    name: "HARDWARE - S&I ELECTRICAL OUTLET PLATE",
    price: "10.40",
    category: "thermostat/prises",
  },
  {
    name: "HARDWARE - S&I GFI OUTLET W/ NEW CIRCUIT",
    price: "104.00",
    category: "thermostat/prises",
  },
  {
    name: "HARDWARE - S&I LOW VOLTAGE THERMOSTAT",
    price: "83.20",
    category: "thermostat/prises",
  },
  {
    name: "HARDWARE - S&I PLUGS & SWITCHES 2 SOCKET",
    price: "36.40",
    category: "thermostat/prises",
  },
  {
    name: "HARDWARE - S&I REGULAR THERMOSTAT",
    price: "75.00",
    category: "thermostat/prises",
  },
  {
    name: "HARDWARE-S&I SELECT SCREEN THERMOSTAT",
    price: "120.00",
    category: "thermostat/prises",
  },

  { name: "KITC - S&I BACKSPLASH WHITE", price: "572.00", category: "cuisine" },
  {
    name: "KITC - REMOVE & DISPOSE BACKSPLASH",
    price: "16.12",
    category: "cuisine",
  },
  {
    name: "KITC - REMOVE AND RE-INSTALL SINK &PARTS",
    price: "208.00",
    category: "cuisine",
  },
  {
    name: "KITC - REPLACE DRAWER FACADE - WHITE",
    price: "52.00",
    category: "cuisine",
  },
  {
    name: "KITC - REPLACE STD CABINET WHITE - DOOR",
    price: "78.00",
    category: "cuisine",
  },
  { name: "KITC - REWIRE RANGEHOOD", price: "124.80", category: "cuisine" },
  { name: "KITC - S&I FAUCET ONLY", price: "286.00", category: "cuisine" },
  {
    name: "KITC - S&I SINGLE SINK & REUSE TAP SET",
    price: "390.00",
    category: "cuisine",
  },
  {
    name: "KITC - S&I SINGLE SINK & TAP SET ALL INC",
    price: "832.00",
    category: "cuisine",
  },
  {
    name: "KITC - S&I STD CABINET WHITE - LOW",
    price: "291.20",
    category: "cuisine",
  },
  {
    name: "KITC - S&I STD CABINET WHITE - UP",
    price: "280.80",
    category: "cuisine",
  },
  { name: "KITC - S&I STD CHROME KNOB", price: "25.00", category: "cuisine" },
  { name: "KITC - S&I STD COUNTER TOP", price: "104.00", category: "cuisine" },
  {
    name: "KITC - S&I STD RANGEHOOD - WHITE",
    price: "338.00",
    category: "cuisine",
  },
  {
    name: "KITC - S&I UNDERSINK BOARD PAINT",
    price: "97.00",
    category: "cuisine",
  },
  {
    name: 'KITC - S&I UPG NICKEL HANDLE 7"',
    price: "20.80",
    category: "cuisine",
  },
  {
    name: "KITC - SAND & VARNISH CABINET 1 COAT",
    price: "109.20",
    category: "cuisine",
  },
  {
    name: "KITC - SAND & VARNISH CABINET 2 COAT",
    price: "140.40",
    category: "cuisine",
  },
  { name: "KITC - SHUTOFF VALVE", price: "88.40", category: "cuisine" },
  {
    name: "KITCHEN/BATHROOM CABINET ADJUSTMENTS",
    price: "67.60",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT ALUMINIUM KNOB",
    price: "25.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT BACKSPLASH LANSE WHITE 2",
    price: "950.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT CAB LIGH GREY WOD GRA-LO",
    price: "295.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT CABINET GREIGE-UP",
    price: "290.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT CHROME KNOB-SQ",
    price: "25.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT COUNTER TOP CALACATTA",
    price: "105.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT FAUCET ADLER ONLY",
    price: "450.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT SINGL SINK SQUARE&TAP SE",
    price: "1080.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I SELECT SINGLE SINK & REUSE TAP",
    price: "630.00",
    category: "cuisine",
  },
  {
    name: "KITC-S&I STD COUNTER TOP MARBLE FINISH",
    price: "104.00",
    category: "cuisine",
  },

  {
    name: 'LIGHT - S&1 BDRM GLASS & PEWTER CLIP 16"',
    price: "176.80",
    category: "lumieres",
  },
  {
    name: "LIGHT - S&I KITC 3 TRACK FROSTED, PEWTER",
    price: "270.40",
    category: "lumieres",
  },
  {
    name: "LIGHT- HALL SCONCE GLASS & PEWTER CLIP",
    price: "104.00",
    category: "lumieres",
  },
  {
    name: 'LIGHT-S & I HALL GLASS & PEWTER CLIP 12"',
    price: "166.40",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I BATH VANITY 2 LIGHT GLASS",
    price: "200.00",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I DINING PENDANT PEWTER CLIPS",
    price: "234.00",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I KITC GLASS & PEWTER CLIP",
    price: "166.40",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I SELECT BRM CANARM CELING LED",
    price: "190.00",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I SELECT DINING CANARM CELI LED",
    price: "190.00",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I SELECT HALL CANARM CELING LED",
    price: "190.00",
    category: "lumieres",
  },
  {
    name: "LIGHT-S&I SELECT VANITY 3 LIGHT BRUSHED",
    price: "295.00",
    category: "lumieres",
  },

  {
    name: "PAINT - 1 BEDROOM, 2ND COAT",
    price: "650.00",
    category: "peinture",
  },
  { name: "PAINT - 1 BEDROOM, CEILING", price: "450.00", category: "peinture" },
  {
    name: "PAINT - 1 BEDROOM, ONE COLOUR",
    price: "1040.00",
    category: "peinture",
  },
  {
    name: "PAINT - 2 BEDROOM, 2ND COAT",
    price: "780.00",
    category: "peinture",
  },
  { name: "PAINT - 2 BEDROOM, CEILING", price: "500.00", category: "peinture" },
  {
    name: "PAINT - 2 BEDROOM, ONE COLOUR",
    price: "1248.00",
    category: "peinture",
  },
  {
    name: "PAINT - 3 BEDROOM, 2ND COAT",
    price: "910.00",
    category: "peinture",
  },
  { name: "PAINT - 3 BEDROOM, CEILING", price: "572.00", category: "peinture" },
  {
    name: "PAINT - 3 BEDROOM, ONE COLOUR",
    price: "1,400.00",
    category: "peinture",
  },
  {
    name: "PAINT - ADDITIONAL PATCH & PAINT",
    price: "7.50",
    category: "peinture",
  },
  { name: "PAINT - BACHELOR CEILING", price: "234.00", category: "peinture" },
  { name: "PAINT - BACHELOR, 2ND COAT", price: "520.00", category: "peinture" },
  {
    name: "PAINT - BACHELOR, ONE COLOUR",
    price: "811.20",
    category: "peinture",
  },
  {
    name: "PAINT - EXTRA COAT FOR DARK COLOR",
    price: "312.00",
    category: "peinture",
  },
  {
    name: "PAINT - JR 1 BEDROOM, CEILING",
    price: "182.00",
    category: "peinture",
  },
  {
    name: "PAINT - JR 1 BEDROOM, ONE COLOUR",
    price: "728.00",
    category: "peinture",
  },
  {
    name: "PAINT - JR. 1 BEDROOM, 2ND COAT",
    price: "624.00",
    category: "peinture",
  },
  {
    name: "PAINT - KITCHEN CABINET, EXTERIOR",
    price: "125.00",
    category: "peinture",
  },
  {
    name: "PAINT - KITCHEN CABINET, INTERIOR",
    price: "150.00",
    category: "peinture",
  },
  {
    name: "PAINT - VANITY CABINET, EXTERIOR",
    price: "156.00",
    category: "peinture",
  },
  {
    name: "PAINT - VANITY CABINET, INTERIOR",
    price: "109.20",
    category: "peinture",
  },
  {
    name: "PAINT - WALLPAPER REMOVAL & PAINT (SQFT)",
    price: "2.08",
    category: "peinture",
  },

  { name: "POST RENOVATION", price: "260.00", category: "Misc" },
  { name: "PRE-RENOVATION PREP", price: "350.00", category: "Misc" },
  { name: "REMOVE REPLACE APPLIANCES", price: "124.80", category: "Misc" },
  { name: "UNIT DOOR HARDWARE ADJUSTMENTS", price: "156.00", category: "Misc" },
  {
    name: "WINDOW/GLASS PATIO DOOR ADJUSTMENTS",
    price: "145.60",
    category: "Misc",
  },
];

const Container = styled.div`
  margin: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

const ClearButton = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const listRef = useRef(null);

  const handleItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
    setTotalPrice(
      (prevTotal) => prevTotal + parseFloat(item.price.replace(",", ""))
    );
    setSearchTerm("");
  };

  const handleClearList = () => {
    setSelectedItems([]);
    setTotalPrice(0);
  };
  const handleGeneratePdf = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const element = document.getElementById("selected-items");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 180; // Adjust as needed
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let textY = 20; // Adjust this value to change the top margin
      selectedItems.forEach((item, index) => {
        pdf.text("O", 10, textY);
        pdf.text(`${item.name} - $${item.price}`, 20, textY);
        textY += 10; // Adjust vertical spacing
        if (textY > 280) {
          // Add new page if close to the bottom
          pdf.addPage();
          textY = 20; // Reset the vertical position
        }
      });

      // Add total price
      pdf.text(`Total Price: $${totalPrice.toFixed(2)}`, 10, textY + 10);

      pdf.save("selected-items.pdf");
    });
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <List ref={listRef}>
        {filteredItems.map((item, index) => (
          <ListItem key={index}>
            {item.name} - ${item.price}
            <button onClick={() => handleItemSelect(item)}>Add</button>
          </ListItem>
        ))}
      </List>

      <ClearButton onClick={handleClearList}>Clear List</ClearButton>
      <List id="selected-items">
        {selectedItems.map((item, index) => (
          <ListItem key={index}>
            {item.name} - ${item.price}
          </ListItem>
        ))}
      </List>

      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      <SubmitButton onClick={handleGeneratePdf}>Generate PDF</SubmitButton>
    </Container>
  );
}

export default App;
