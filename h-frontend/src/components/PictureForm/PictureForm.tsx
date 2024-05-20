import React, { useRef, useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import DropFileInput from "shared/DropFileInput";
import Button from "shared/CustomButton/Button";
import addImage from "../../icons/add-image.svg";
import { PictureFormCss } from "./PictureForm.styled";
import pictureStore from "store/PictureStore";
import { debounce } from "lodash";
import { Context } from "components/general/App/App";

const PictureForm = observer(() => {
  const owner = useContext(Context);
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null)!;
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  const handleVisibility = () => {
    setInterval(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        ref.current.style.display = isVisible ? "block" : "none";
      }
    }, 500)
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleVisibility, 200));
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const firstTouch = e.touches[0];
    setTouchStart({ x: firstTouch.clientX, y: firstTouch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const lastTouch = e.changedTouches[0];
    setTouchEnd({ x: lastTouch.clientX, y: lastTouch.clientY });
  };

  useEffect(() => {
    if (touchStart && touchEnd) {
      const diffX = touchEnd.x - touchStart.x;
      const diffY = touchEnd.y - touchStart.y;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          ref.current?.classList.add("open");
        } else {
          ref.current?.classList.remove("open");
        }
      }

      setTouchStart(null);
      setTouchEnd(null);
    }
  }, [touchStart, touchEnd]);

  useEffect(() => {
    const handleResize = () => {
      if (formRef.current) {
        formRef.current.style.height = `${document.body.scrollHeight}px`;
      }
    };

    window.addEventListener("scroll", debounce(handleResize, 500));
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("scroll", debounce(handleResize, 500));
    };
    // eslint-disable-next-line
  }, []);

  const handleAddPicture = async (file: File) => {
    try {
      const picture = new FormData();
      if (file) {
        picture.append("image", file);
      }
      if (owner === "hush") {
        await pictureStore.addPicture(picture);
      } 
      if (owner === "risey") {
        await pictureStore.addRiseyPicture(picture);
      }
    } catch (error) {
      // Handle error appropriately
    }
  };

  return (
    <PictureFormCss
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={formRef}
    >
      <section
        className={`add-image ${owner === "hush" && "add-image--hush"} ${
          owner === "risey" && "add-image--risey"
        } open`}
        ref={ref}
      >
        {owner === "hush" && (
          <Button
            text="open your eyes"
            mainTheme="Ocean"
            branchTheme="Coral"
          />
        )}
        <DropFileInput
          imagePath={addImage}
          size={50}
          borderRadius="50px"
          name=""
          onFileChange={handleAddPicture}
        />
      </section>
    </PictureFormCss>
  );
});

export default PictureForm;