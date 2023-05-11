const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema(
  {
    category: {
      type: String,
      enum: ["resale", "rental", "lease"],
      default: null,
    },
    gatedCommunity: {
      type: Boolean,
      default: false,
    },
    propertyType: {
      type: String,
      // enum: [
      //   "apartment",
      //   "banglow",
      //   "independent-house",
      //   "villa",
      //   "gated-community",
      //   "plot",
      // ],
      default: null,
    },
    sba: {
      type: Number,
      default: null,
    },
    plotArea: {
      type: Number,
      default: null,
    },
    carpetArea: {
      type: Number,
      default: null,
    },
    plotConfiguration: {
      type: String,
      default: null,
    },
    constructionStatus: {
      type: String,
      // enum: ["under-construction", "nearing-completion", "rtmi"],
      default: null,
    },
    directionFacing: {
      type: String,
      // enum: [
      //   "north",
      //   "south",
      //   "east",
      //   "west",
      //   "north-west",
      //   "north-east",
      //   "south-east",
      //   "south-west",
      //   "unknown",
      // ],
      default: null,
    },
    configuration: {
      type: String,
      // enum: [
      //   "studio",
      //   "1BHK",
      //   "2BHK",
      //   "2.5BHK",
      //   "3BHK",
      //   "4BHK",
      //   "4+BHK",
      //   "penthouse",
      //   "villa",
      //   "plot",
      // ],
      default: null,
    },
    furnishingType: {
      type: String,
      // enum: ["none", "semi", "full"],
      default: null,
    },
    availableFrom: {
      type: String,
      default: null,
    },
    postedOn: {
      type: String,
      default: null,
    },
    propertyId: {
      type: String,
      default: null,
    },
    cpName: {
      type: String,
      default: null,
    },
    propertyLimits: {
      type: String,
      // enum: ["bbmp", "biappa", "dpa", "panchayat"],
    },
    reraNo: {
      type: String,
      default: null,
    },
    propertyAge: {
      type: String,
      // enum: ["under-construction", "<1yr", "1-5yrs", "5-10yrs", "10+yrs"],
      default: null,
    },
    projectName: {
      type: String,
      default: null,
    },
    builderName: {
      type: String,
      default: null,
    },
    waterSupply: {
      type: String,
      // enum: ["borewell", "municipal", "open-well", "tanker"],
      default: null,
    },
    launchDate: {
      type: String,
      default: null,
    },
    visitorParking: {
      type: Boolean,
      default: false,
    },
    brochure: {
      type: String,
      default: null,
    },
    noOfOwners: {
      type: Number,
      default: 1,
    },
    khataInOwnersName: {
      type: Boolean,
      default: true,
    },
    lastTaxPaid: {
      type: String,
      default: null,
    },
    ownerName: {
      type: String,
      default: null,
    },
    ownerContact: {
      type: String,
      default: null,
    },
    towerWing: {
      type: String,
      default: null,
    },
    phase: {
      type: String,
      default: null,
    },
    floor: {
      type: String,
      default: null,
    },
    totalFloor: {
      type: Number,
      default: null,
    },
    unitName: {
      type: String,
      default: null,
    },
    doorFacing: {
      type: String,
      default: null,
    },
    noOfBathrooms: {
      type: Number,
      default: null,
    },
    parking: {
      type: Boolean,
      default: true,
    },
    balcony: {
      type: Boolean,
      default: true,
    },
    flooring: {
      type: String,
      // enum: ["marble", "granite"],
      default: null,
    },
    noOfParking: {
      type: Number,
      default: null,
    },
    parkingType: {
      type: String,
      // enum: ["covered", "open", "nil"],
      default: null,
    },
    propertyAddressZone: {
      type: String,
      // enum: ["north", "east", "west", "south"],
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    propertyAddress: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    nearestLandmark: {
      type: String,
      default: null,
    },
    propertyLocation: {
      type: String,
      default: null,
    },
    pincode: {
      type: Number,
      default: null,
    },
    lat: {
      type: Number,
      default: null,
    },
    lng: {
      type: Number,
      default: null,
    },
    snagDetails: {
      type: String,
      default: null,
    },
    repairs: {
      type: String,
      default: null,
    },
    gallery: {type : Array ,required:true ,  "default" : [] },
      
      // [{
      //   category: {
      //     type: String,
      //     default: null,
      //   },
      //   subCategory: {
      //     type: String,
      //     default: null,
      //   },
      //   link: {
      //     type: String,
      //     default: null,
      //   },
      // },
    // ],
    amenities: {
      cyclingTrack: {
        type: Boolean,
        default: false,
      },
      yogaDeck: {
        type: Boolean,
        default: false,
      },
      outdoorGym: {
        type: Boolean,
        default: false,
      },
      indoorGym: {
        type: Boolean,
        default: false,
      },
      yogaRoom: {
        type: Boolean,
        default: false,
      },
      spa: {
        type: Boolean,
        default: false,
      },
      steamAndSauna: {
        type: Boolean,
        default: false,
      },
      kidsPool: {
        type: Boolean,
        default: false,
      },
      swimmingPool: {
        type: Boolean,
        default: false,
      },
      aerobicsStudio: {
        type: Boolean,
        default: false,
      },
      badmintonCourt: {
        type: Boolean,
        default: false,
      },
      basketballCourt: {
        type: Boolean,
        default: false,
      },
      volleyballCourt: {
        type: Boolean,
        default: false,
      },
      squashCourt: {
        type: Boolean,
        default: false,
      },
      tennisCourt: {
        type: Boolean,
        default: false,
      },
      tableTennis: {
        type: Boolean,
        default: false,
      },
      boxCricket: {
        type: Boolean,
        default: false,
      },
      golf: {
        type: Boolean,
        default: false,
      },
      multipurposeCourt: {
        type: Boolean,
        default: false,
      },
      billiards: {
        type: Boolean,
        default: false,
      },
      skatingRink: {
        type: Boolean,
        default: false,
      },
      playArea: {
        type: Boolean,
        default: false,
      },
      library: {
        type: Boolean,
        default: false,
      },
      creche: {
        type: Boolean,
        default: false,
      },
      danceStudio: {
        type: Boolean,
        default: false,
      },
      videoGameRoom: {
        type: Boolean,
        default: false,
      },
      adventureSports: {
        type: Boolean,
        default: false,
      },
      oat: {
        type: Boolean,
        default: false,
      },
      miniTheatre: {
        type: Boolean,
        default: false,
      },
      preFunctionHall: {
        type: Boolean,
        default: false,
      },
      banquetHall: {
        type: Boolean,
        default: false,
      },
      cafe: {
        type: Boolean,
        default: false,
      },
      barbecuePit: {
        type: Boolean,
        default: false,
      },
      parks: {
        type: Boolean,
        default: false,
      },
      seniorCitizenCorner: {
        type: Boolean,
        default: false,
      },
      natureTrail: {
        type: Boolean,
        default: false,
      },
      terraceGarden: {
        type: Boolean,
        default: false,
      },
      ac: {
        type: Boolean,
        default: false,
      },
      intercom: {
        type: Boolean,
        default: false,
      },
      internet: {
        type: Boolean,
        default: false,
      },
      petPark: {
        type: Boolean,
        default: false,
      },
      gatedSecurity: {
        type: Boolean,
        default: false,
      },
      cctv: {
        type: Boolean,
        default: false,
      },
      visitorParking: {
        type: Boolean,
        default: false,
      },
      fireAlarm: {
        type: Boolean,
        default: false,
      },
      fireExtinguisher: {
        type: Boolean,
        default: false,
      },
      waterSprinkler: {
        type: Boolean,
        default: false,
      },
      rainwaterHarvesting: {
        type: Boolean,
        default: false,
      },
      organicWasteConverter: {
        type: Boolean,
        default: false,
      },
      solarHeater: {
        type: Boolean,
        default: false,
      },
      solarLighting: {
        type: Boolean,
        default: false,
      },
      electricCarCharging: {
        type: Boolean,
        default: false,
      },
      sewageTreatmentPlant: {
        type: Boolean,
        default: false,
      },
      atm: {
        type: Boolean,
        default: false,
      },
      lift: {
        type: Boolean,
        default: false,
      },
      supermarket: {
        type: Boolean,
        default: false,
      },
      coWorkingSpace: {
        type: Boolean,
        default: false,
      },
      pharmacy: {
        type: Boolean,
        default: false,
      },
      salon: {
        type: Boolean,
        default: false,
      },
      conferenceRoom: {
        type: Boolean,
        default: false,
      },
      laundry: {
        type: Boolean,
        default: false,
      },
      groceryStore: {
        type: Boolean,
        default: false,
      },
      houseKeeping: {
        type: Boolean,
        default: false,
      },
      powerBackup: {
        type: Boolean,
        default: false,
      },
      gasPipeline: {
        type: Boolean,
        default: false,
      },
      garbageChute: {
        type: Boolean,
        default: false,
      },
    },
    documents: {
      onlineRegistrationForm: {
        type: String,
        default: null,
      },
      resaleForm: {
        type: String,
        default: null,
      },
      rentalForm: {
        type: String,
        default: null,
      },
      rentalAgreement: {
        type: String,
        default: null,
      },
      propertyInspectionReport: {
        type: String,
        default: null,
      },
      mou: {
        type: String,
        default: null,
      },
    },
    tenancyStatus: {
      type: String,
      default: null,
    },
    tenantType: {
      type: String,
      default: null,
    },
    securityDeposit: {
      type: Number,
      default: null,
    },
    tenancyExitStatus: {
      type: String,
      default: null,
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    nonVegAllowed: {
      type: Boolean,
      default: false,
    },
    bookingPricing: {
      leaseDuration: {
        type: Number,
        default: null,
      },
      dateOfBooking: {
        type: String,
        default: null,
      },
      agreementStatus: {
        type: String,
        default: null,
      },
      registration: {
        type: Boolean,
        default: false,
      },
      salesDeed: {
        type: Boolean,
        default: false,
      },
      khata: {
        type: Boolean,
        default: false,
      },
      ec: {
        type: Boolean,
        default: false,
      },
      propertyTax: {
        type: Boolean,
        default: false,
      },
      registrarOffice: {
        type: String,
        default: null,
      },
      expectedPrice1: {
        type: Number,
        default: null,
      },
      negotiatedPrice1: {
        type: Number,
        default: null,
      },
      closedPrice1: {
        type: Number,
        default: null,
      },
      expectedPrice2: {
        type: Number,
        default: null,
      },
      negotiatedPrice2: {
        type: Number,
        default: null,
      },
      closedPrice2: {
        type: Number,
        default: null,
      },
      deposit: {
        type: Number,
        default: null,
      },
      maintenanceCharges1: {
        type: Number,
        default: null,
      },
      maintenanceCharges2: {
        type: Number,
        default: null,
      },
      monthlyRental: {
        type: Number,
        default: null,
      },
      priceNegotiaton: {
        type: Boolean,
        default: false,
      },
      leaseAmount: {
        type: Number,
        default: null,
      },
      mortgaged: {
        type: Boolean,
        default: false,
      },
      lenderName: {
        type: String,
        default: null,
      },
      bankerName: {
        type: String,
        default: null,
      },
      existingLoan: {
        type: Boolean,
        default: false,
      },
      outstandingLoan: {
        type: Number,
        default: null,
      },
      totalLoan: {
        type: Number,
        default: null,
      },
      interestRate: {
        type: Number,
        default: null,
      },
    },
    status: {
      type: String,
      enum: ["pending", "published" , "rejected"],
      default: "pending",
    },
    propertyActivateStatus:{
      type: String,
      enum: ["deactivated", "activated" , "deleted"],
      default: "activated",
    },
    saleStatus: {
      type: String,
      enum: ["available", "sold" , "rented"],
      default: "available",
    },
    description: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Property =
  mongoose.models.Property || mongoose.model("Property", PropertySchema);
module.exports = Property;
