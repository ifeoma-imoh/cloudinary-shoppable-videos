const shoppable = {
  shoppable: {
    startState: "openOnPlay",
    autoClose: 3,
    width: "15%",
    bannerMsg: "Start shopping",
    transformation: {
      quality: "auto:eco",
      fetch_format: "auto",
      crop: "pad",
      aspect_ratio: "1",
    },
    products: [
      {
        productId: 1,
        productName: "bag",
        startTime: 0,
        endTime: 2,
        publicId: "bagImage_xlytwp",
        hotspots: [
          {
            time: "00:01",
            x: "20%",
            y: "20%",
            tooltipPosition: "bottom",
            clickUrl: "https://cloudinary.com/",
          },
        ],
        onHover: {
          action: "overlay",
          args: "Click to checkout",
        },
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "https://cloudinary.com/",
          },
        },
      },
      {
        productId: 2,
        productName: "Jacket",
        startTime: 3,
        endTime: 9,
        publicId: "jacketimage_pr34ns",
        onClick: {
          action: "seek",
          pause: 5,
          args: {
            time: "00:06",
          },
        },
        onHover: {
          action: "overlay",
          args: "Click to see this product in the video",
        },
      },
      {
        productId: 3,
        productName: "Glasses",
        startTime: 12,
        endTime: 20,
        publicId: "glassesImage_ebsfsp",
        onHover: {
          action: "switch",
          args: {
            publicId: "cld-sample-5",
          },
        },
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "https://cloudinary.com/",
          },
        },
        onHover: {
          action: "overlay",
          args: "Click to checkout",
        },
      },
    ],
  },
};

export default shoppable;
