import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import errorAnimation from "../assets/error_gif2.gif";
import Modal from "@mui/material/Modal";

type props = { open: boolean; handleClose: VoidFunction };

export default function BasicModal({ open, handleClose }: props) {
  const xl = useMediaQuery("(min-width:1060px)");
  const md = useMediaQuery("(min-width:900px)");
  const sm = useMediaQuery("(min-width:768px)");
  const ss = useMediaQuery("(min-width:620px)");
  const xs = useMediaQuery("(min-width:480px)");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: xl
      ? "35%"
      : md
      ? "45%"
      : sm
      ? "55%"
      : ss
      ? "65%"
      : xs
      ? "75%"
      : "90%",

    bgcolor: "background.paper",
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className=" flex flex-col items-center gap-4 text-center "
        >
          <div className="w-3/4">
            <img className="" src={errorAnimation} alt="error gif" />
          </div>
          <div className=" text-2xl max-sm:text-xl font-bold">
            Something went Wrong
          </div>
          <div className="text-lg max-sm:text-base">
            Check your internet access and refreshing the page
          </div>
          <button
            className=" text-white bg-red-500 border-none outline-none p-2 rounded-md"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </Box>
      </Modal>
    </div>
  );
}
