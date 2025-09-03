import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

function Services() {
  const projectSections =[
  {
    section_title: "6. Structures",
    pill: "Headworks to Tailrace",
    data: [
      {
        item: "Dam / Weir",
        tamor_scheme: {
          Type: "Gated barrage",
          Length: "85 m",
          "Provision of Stilling Basin": "Simple rectangular"
        },
        mewa_scheme: {
          Type: "Concrete overflow",
          Length: "45 m",
          "Provision of Stilling Basin": "Simple rectangular"
        }
      },
      {
        item: "Diversion During Construction",
        tamor_scheme: {
          "Construction Flood": "665 m³/s",
          "Diversion Type": "Embankment"
        },
        mewa_scheme: {
          "Construction Flood": "390 m³/s",
          "Diversion Type": "Embankment"
        }
      },
      {
        item: "Sluicing",
        tamor_scheme: {
          "Number of Bays": "Spillway gates: 4; Undersluice gates: 2",
          "Dimension (B × H)": "Spillway: 10 m × 7 m; Undersluice: 10 m × 12 m",
          "Gate Type": "Radial"
        },
        mewa_scheme: {
          "Number of Bays": "2",
          "Dimension (B × H)": "5 m × 4 m",
          "Gate Type": "Vertical lift"
        }
      },
      {
        item: "Intake Structure",
        tamor_scheme: {
          "Type of Intake": "Submerged concrete orifice",
          "Number of Openings": "6",
          "Size of Intake (B × H)": "5 m × 5 m",
          "Gate Type": "Vertical lift gate",
          "Hoisting System": "Rope drum hoist",
          "Trashrack Size (B × H)": "5 m × 5 m",
          "Clear Opening of Trashrack": "32 mm",
          "Trash Cleaning Mechanism": "TRCM"
        },
        mewa_scheme: {
          "Type of Intake": "Submerged concrete orifice",
          "Number of Openings": "4",
          "Size of Intake (B × H)": "4 m × 2.5 m",
          "Gate Type": "Vertical lift gate",
          "Hoisting System": "Rope drum hoist",
          "Trashrack Size (B × H)": "4 m × 2.5 m",
          "Clear Opening of Trashrack": "32 mm",
          "Trash Cleaning Mechanism": "Manual"
        }
      },
      {
        item: "Gravel Trap",
        shared_data: {
          Type: "RCC rectangular",
          "Number of Bays": "3",
          "Gravel Trap Size (L × B × H)": "32 × 8 × 8 m",
          "Flushing Canal Size (B × H)": "2 × 2 m"
        }
      },
      {
        item: "Connecting Canal",
        shared_data: {
          "Size (L × B × H)": "62 × 4 × 8 m"
        }
      },
      {
        item: "Desander",
        tamor_scheme: {
          Type: "Dufour",
          "Particle Size to be Settled": "0.2 mm",
          "Settling Efficiency": "90%",
          "Number of Bays": "3",
          "Dimension (L × B × H)": "160 × 30 × 12 m",
          "Inlet Transition Length": "45 m",
          "Flushing System": "Intermittent",
          "Flushing Channel Size (B × H)": "1 × 1 m"
        },
        mewa_scheme: {
          Type: "Dufour",
          "Particle Size to be Settled": "0.5 mm",
          "Settling Efficiency": "90%",
          "Number of Bays": "1",
          "Dimension (L × B × H)": "80 × 16 × 5 m",
          "Inlet Transition Length": "15 m",
          "Flushing System": "Intermittent",
          "Flushing Channel Size (B × H)": "1 × 1 m"
        }
      },
      {
        item: "Headrace",
        tamor_scheme: {
          Type: "Headrace tunnel",
          Material: "Concrete and shotcrete lined",
          Length: "4.78 km",
          Dimension: "7 m dia. horseshoe"
        },
        mewa_scheme: {
          Type: "Steel headrace pipe and headrace tunnel",
          Material: "Steel pipe and shotcrete lined",
          Length: "306 m (pipe) + 2616 m (tunnel)",
          Dimension: "Pipe: 3 m dia. circular; Tunnel: 4.05 m dia. inverted D"
        }
      },
      {
        item: "Surge Shaft",
        shared_data: {
          Type: "Restricted orifice",
          "Internal Diameter": "15 m",
          Height: "58 m"
        }
      },
      {
        item: "Penstock / Pressure Shaft",
        tamor_scheme: {
          Type: "Underground",
          Material: "Steel lined",
          "Internal Diameter": "5.75 m",
          Length: "155 m",
          "Steel Thickness": "20–36 mm"
        },
        mewa_scheme: {
          Type: "Surface",
          Material: "Steel pipe",
          "Internal Diameter": "3.0 m",
          Length: "120 m",
          "Steel Thickness": "12 mm"
        }
      },
      {
        item: "Powerhouse",
        shared_data: {
          Type: "Underground",
          "Size (L × B × H)": "80 × 20 × 29 m",
          "Overhead Hoisting Type": "EOT crane",
          "Overhead Hoist Capacity": "140 t",
          "Support Type": "Shotcrete and rock bolt"
        }
      },
      {
        item: "Tailrace",
        shared_data: {
          Type: "Underground",
          Number: "1",
          Dimension: "7.6 m dia. horseshoe",
          Length: "270 m"
        }
      }
    ]
  },
  {
    section_title: "7. Turbine",
    pill: "Units",
    data: {
      Type: "Vertical-axis Francis",
      Number: "3",
      "Rated Output Capacity per Unit": "44.00 MW",
      "Gross Head": "124.50 m",
      "Discharge per Unit": "42 m³/s",
      Efficiency: "92%"
    }
  },
  {
    section_title: "8. Generator",
    pill: "Electrical",
    data: {
      Type: "Synchronous",
      "Synchronous Speed": "300 rpm",
      "Rated Output Capacity per Unit": "50.30 MVA",
      "Power Factor": "0.85 over-excited",
      "Generation Voltage": "11 kV",
      Frequency: "50 Hz",
      "Number of Units": "3",
      "Excitation System": "Static with microprocessor-based digital AVR",
      Efficiency: "97%"
    }
  },
  {
    section_title: "9. Transformer",
    pill: "Step-up",
    data: {
      Type: "Indoor type, single phase",
      "Rated Capacity": "17 MVA each",
      "Voltage Ratio": "220/√3/11 kV",
      "Number of Units": "10 (including 1 spare)",
      "Vector Group": "Ynd5, solidly earthed",
      Frequency: "50 Hz",
      Efficiency: "99%"
    }
  },
  {
    section_title: "10. Transmission Line",
    pill: "Evacuation",
    data: {
      "Voltage Level": "220 kV, double circuit",
      Length: "6.3 km",
      "Conductor Type": "2 × BISON",
      From: "PH switchyard",
      To: "Dhungesaghu Substation"
    }
  },
  {
    section_title: "11. Power and Energy",
    pill: "Performance",
    data: {
      "Design Discharge": "129.56 m³/s",
      "Gross Head": "124.5 m",
      "Installed Capacity": "128 MW",
      "Total Energy": "719.11 GWh"
    }
  }
];


  return (
    <div>
      <Header />
      <Breadcrumb pageTitle="Project Details" />
      {projectSections.map((section, idx) => (
  <ProjectSection key={idx} title={section.section_title} data={section.data} />
))}
      <Footer />
    </div>
  );
}

export default Services;
