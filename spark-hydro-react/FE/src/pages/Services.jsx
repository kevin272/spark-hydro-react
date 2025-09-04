import React from 'react';
import Header from '../components/HeaderLayout1';
import Breadcrumb from '../components/Breadcrumb';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

function Services() {
    const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem 1rem",
    },
    sectionHead: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "2rem 0 1rem",
      paddingBottom: "0.5rem",
      borderBottom: "2px solid #e2e8f0",
    },
    sectionTitle: {
      fontSize: "1.4rem",
      fontWeight: 600,
      color: "#1e293b",
    },
    pill: {
      background: "#f1f5f9",
      border: "1px solid #cbd5e1",
      padding: "0.25rem 0.75rem",
      borderRadius: "999px",
      fontSize: "0.85rem",
      fontWeight: 500,
      color: "#475569",
    },
    tableWrap: {
      overflowX: "auto",
      marginBottom: "2rem",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.95rem",
    },
    key: {
      padding: "0.65rem 0.75rem",
      borderBottom: "1px solid #e2e8f0",
      verticalAlign: "top",
      fontWeight: 600,
      color: "#0f172a",
      width: "35%",
    },
    val: {
      padding: "0.65rem 0.75rem",
      borderBottom: "1px solid #e2e8f0",
      verticalAlign: "top",
      color: "#334155",
    },
  };
  const projectSections =[
  {
    section_title: "1. General",
    pill: "Overview",
    data: [
      { item: "Name of the Project", value: "Tamor Mewa Hydroelectric Project" },
      { item: "Name of River", value: "Tamor and Mewa" },
      { item: "Type of Scheme", value: "Run-of-the-River (RoR)" },
      { item: "District", value: "Taplejung" },
      { item: "Geographical Coordinates — Latitude", value: "27°20′00″N to 27°24′08″N" },
      { item: "Geographical Coordinates — Longitude", value: "87°37′15″E to 87°40′00″E" },
      { item: "Nearest Town", value: "Phungling" },
      { item: "Access Road Name", value: "Mechi Highway" }
    ]
  },
  {
    section_title: "2. Organization",
    pill: "Developer",
    data: [
      { item: "Developer", value: "Spark Hydroelectric Company Limited" }
    ]
  },
  {
    section_title: "3. Hydrology",
    pill: "Catchment & Discharge",
    data: [
      { item: "Catchment Area", tamor_scheme: "2062 km²", mewa_scheme: "574 km²" },
      { item: "Discharge at 40% PoE", tamor_scheme: "95.38 m³/s", mewa_scheme: "34.18 m³/s" }
    ]
  },
  {
    section_title: "4. Sediment Study",
    pill: "Load",
    data: [
      { item: "Average Annual Sediment Load", value: "9.41 million tons/year" }
    ]
  },
  {
    section_title: "5. Geology",
    pill: "Site Conditions",
    data: [
      { item: "Regional Geology", value: "Lesser Himalaya, Taplejung window" },
      { item: "Major Rock Types in Headworks", value: "Mewa: Augen gneiss; Tamor: schist, phyllite, quartzite, granitic gneiss" },
      { item: "Major Rock Type in Waterways", value: "Mewa: mica schist; Tamor: schist, phyllite, and quartzite intercalation" },
      { item: "Major Rock Type in Powerhouse", value: "Granitic gneiss" }
    ]
  },
  {
    section_title: "6. Structures",
    pill: "Headworks to Tailrace",
    data: [
      { item: "Dam / Weir - Type", tamor_scheme: "Gated barrage", mewa_scheme: "Concrete overflow" },
      { item: "Dam / Weir - Length", tamor_scheme: "85 m", mewa_scheme: "45 m" },
      { item: "Provision of Stilling Basin", tamor_scheme: "Simple rectangular", mewa_scheme: "Simple rectangular" },
      { item: "Construction Flood", tamor_scheme: "665 m³/s", mewa_scheme: "390 m³/s" },
      { item: "Diversion Type", tamor_scheme: "Embankment", mewa_scheme: "Embankment" },
      { item: "Sluicing - Number of Bays", tamor_scheme: "Spillway gates: 4; Undersluice gates: 2", mewa_scheme: "2" },
      { item: "Sluicing - Dimension (B × H)", tamor_scheme: "Spillway: 10 m × 7 m; Undersluice: 10 m × 12 m", mewa_scheme: "5 m × 4 m" },
      { item: "Sluicing - Gate Type", tamor_scheme: "Radial", mewa_scheme: "Vertical lift" },
      { item: "Intake - Type of Intake", tamor_scheme: "Submerged concrete orifice", mewa_scheme: "Submerged concrete orifice" },
      { item: "Intake - Number of Openings", tamor_scheme: "6", mewa_scheme: "4" },
      { item: "Intake - Size", tamor_scheme: "5 m × 5 m", mewa_scheme: "4 m × 2.5 m" },
      { item: "Intake - Gate Type", tamor_scheme: "Vertical lift gate", mewa_scheme: "Vertical lift gate" },
      { item: "Intake - Hoisting System", tamor_scheme: "Rope drum hoist", mewa_scheme: "Rope drum hoist" },
      { item: "Intake - Trashrack Size", tamor_scheme: "5 m × 5 m", mewa_scheme: "4 m × 2.5 m" },
      { item: "Clear Opening of Trashrack", tamor_scheme: "32 mm", mewa_scheme: "32 mm" },
      { item: "Trash Cleaning Mechanism", tamor_scheme: "TRCM", mewa_scheme: "Manual" },
      { item: "Gravel Trap - Type", shared_data: { value: "RCC rectangular" } },
      { item: "Gravel Trap - Number of Bays", shared_data: { value: "3" } },
      { item: "Gravel Trap - Size", shared_data: { value: "32 × 8 × 8 m" } },
      { item: "Gravel Trap - Flushing Canal Size", shared_data: { value: "2 × 2 m" } },
      { item: "Connecting Canal - Size", shared_data: { value: "62 × 4 × 8 m" } },
      { item: "Desander - Type", tamor_scheme: "Dufour", mewa_scheme: "Dufour" },
      { item: "Desander - Particle Size", tamor_scheme: "0.2 mm", mewa_scheme: "0.5 mm" },
      { item: "Desander - Settling Efficiency", tamor_scheme: "90%", mewa_scheme: "90%" },
      { item: "Desander - Number of Bays", tamor_scheme: "3", mewa_scheme: "1" },
      { item: "Desander - Dimension", tamor_scheme: "160 × 30 × 12 m", mewa_scheme: "80 × 16 × 5 m" },
      { item: "Desander - Inlet Transition Length", tamor_scheme: "45 m", mewa_scheme: "15 m" },
      { item: "Desander - Flushing System", tamor_scheme: "Intermittent", mewa_scheme: "Intermittent" },
      { item: "Desander - Flushing Channel Size", tamor_scheme: "1 × 1 m", mewa_scheme: "1 × 1 m" },
      { item: "Headrace - Type", tamor_scheme: "Headrace tunnel", mewa_scheme: "Steel headrace pipe + tunnel" },
      { item: "Headrace - Material", tamor_scheme: "Concrete & shotcrete lined", mewa_scheme: "Steel pipe & shotcrete lined" },
      { item: "Headrace - Length", tamor_scheme: "4.78 km", mewa_scheme: "306 m (pipe) + 2616 m (tunnel)" },
      { item: "Headrace - Dimension", tamor_scheme: "7 m dia. horseshoe", mewa_scheme: "Pipe: 3 m dia.; Tunnel: 4.05 m dia. inverted D" },
      { item: "Surge Shaft - Type", shared_data: { value: "Restricted orifice" } },
      { item: "Surge Shaft - Internal Diameter", shared_data: { value: "15 m" } },
      { item: "Surge Shaft - Height", shared_data: { value: "58 m" } },
      { item: "Penstock - Type", tamor_scheme: "Underground", mewa_scheme: "Surface" },
      { item: "Penstock - Material", tamor_scheme: "Steel lined", mewa_scheme: "Steel pipe" },
      { item: "Penstock - Internal Diameter", tamor_scheme: "5.75 m", mewa_scheme: "3.0 m" },
      { item: "Penstock - Length", tamor_scheme: "155 m", mewa_scheme: "120 m" },
      { item: "Penstock - Steel Thickness", tamor_scheme: "20–36 mm", mewa_scheme: "12 mm" },
      { item: "Powerhouse - Type", shared_data: { value: "Underground" } },
      { item: "Powerhouse - Size", shared_data: { value: "80 × 20 × 29 m" } },
      { item: "Powerhouse - Hoisting Type", shared_data: { value: "EOT crane" } },
      { item: "Powerhouse - Hoist Capacity", shared_data: { value: "140 t" } },
      { item: "Powerhouse - Support Type", shared_data: { value: "Shotcrete and rock bolt" } },
      { item: "Tailrace - Type", shared_data: { value: "Underground" } },
      { item: "Tailrace - Number", shared_data: { value: "1" } },
      { item: "Tailrace - Dimension", shared_data: { value: "7.6 m dia. horseshoe" } },
      { item: "Tailrace - Length", shared_data: { value: "270 m" } }
    ]
  },
  {
    section_title: "7. Turbine",
    pill: "Units",
    data: [
      { item: "Type", value: "Vertical-axis Francis" },
      { item: "Number", value: "3" },
      { item: "Rated Output Capacity per Unit", value: "44.00 MW" },
      { item: "Gross Head", value: "124.50 m" },
      { item: "Discharge per Unit", value: "42 m³/s" },
      { item: "Efficiency", value: "92%" }
    ]
  },
  {
    section_title: "8. Generator",
    pill: "Electrical",
    data: [
      { item: "Type", value: "Synchronous" },
      { item: "Synchronous Speed", value: "300 rpm" },
      { item: "Rated Output Capacity per Unit", value: "50.30 MVA" },
      { item: "Power Factor", value: "0.85 over-excited" },
      { item: "Generation Voltage", value: "11 kV" },
      { item: "Frequency", value: "50 Hz" },
      { item: "Number of Units", value: "3" },
      { item: "Excitation System", value: "Static with microprocessor-based digital AVR" },
      { item: "Efficiency", value: "97%" }
    ]
  },
  {
    section_title: "9. Transformer",
    pill: "Step-up",
    data: [
      { item: "Type", value: "Indoor type, single phase" },
      { item: "Rated Capacity", value: "17 MVA each" },
      { item: "Voltage Ratio", value: "220/√3/11 kV" },
      { item: "Number of Units", value: "10 (including 1 spare)" },
      { item: "Vector Group", value: "Ynd5, solidly earthed" },
      { item: "Frequency", value: "50 Hz" },
      { item: "Efficiency", value: "99%" }
    ]
  },
  {
    section_title: "10. Transmission Line",
    pill: "Evacuation",
    data: [
      { item: "Voltage Level", value: "220 kV, double circuit" },
      { item: "Length", value: "6.3 km" },
      { item: "Conductor Type", value: "2 × BISON" },
      { item: "From", value: "PH switchyard" },
      { item: "To", value: "Dhungesaghu Substation" }
    ]
  },
  {
    section_title: "11. Power and Energy",
    pill: "Performance",
    data: [
      { item: "Design Discharge", value: "129.56 m³/s" },
      { item: "Gross Head", value: "124.5 m" },
      { item: "Installed Capacity", value: "128 MW" },
      { item: "Total Energy", value: "719.11 GWh" }
    ]
  }
]



  return (<>
          <Breadcrumb title="Tamor Mewa" />
    <div style={styles.container}>
      {projectSections.map((section, idx) => (
        <div key={idx}>
          <div style={styles.sectionHead}>
            <h2 style={styles.sectionTitle}>{section.section_title}</h2>
            <span style={styles.pill}>{section.pill}</span>
          </div>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <tbody>
                {section.data.map((row, i) => (
                  <tr key={i}>
                    <td style={styles.key}>{row.item}</td>
                    <td style={styles.val}>
                      {row.value ||
                        (row.shared_data?.value ?? "") ||
                        `Tamor: ${row.tamor_scheme || "-"} | Mewa: ${row.mewa_scheme || "-"}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      ))}
    </div>
    </>
  );
}

export default Services;
