import toast from "react-hot-toast";

export type Option = 'add' | 'delete' | 'similar' | 'delete-similar';


export const toastPromise = (myPromise: Promise<void>, option: Option) =>
  toast.promise(
    myPromise,
    {
      loading: "Loading",
      success: () =>
          option === "add"
          ?  `Image added successfully!`
          : option === "delete"
          ?  `Image deleted successfully!`
          : option === "similar"
          ?  `Are these look similar? Check!`
          : option === "delete-similar"
          ?  `All similars have been deleted!`
          :  `Successful!`,
      error: (err) => `This just happened: ${err.toString()}`,
    },
    {
      style: {
        minWidth: "250px",
      },
      success: {
        style: {
          backgroundColor:
            option === "add"
              ? "darkgreen"
              : option === "delete"
              ? "darkred"
              : option === "similar"
              ? "orange"
              : option === "delete-similar"
              ? "purple"
              : "white",
          color:
            option === "add"
              ? "white"
              : option === "delete"
              ? "white"
              : option === "delete-similar"
              ? "white"
              : "black",
        },
        duration: option === 'delete-similar' ? 2000 : 4000,
        icon:
          option === "add"
            ? "🥳"
            : option === "delete"
            ? "👻"
            : option === "similar"
            ? "🧐"
            : option === "delete-similar"
            ? "🤓"
            : "👾",
      },
      error: {
        style: {
          backgroundColor: "white",
          color: "black",
        },
        duration: 5000,
        icon: "🤔",
      },
    }
  );

