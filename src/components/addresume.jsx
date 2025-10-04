import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ghost } from "lucide-react";
const Addresume = () => {
    const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div className="resume-create w-[50px] h-[50px] bg-amber-500 ">
        <i class="fa-solid fa-plus cursor-pointer p-4" onClick={()=>{setOpenDialog(true)}} ></i>
      </div>
      <Dialog className="bg-amber-900"  open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="py-4" >Create New Resume</DialogTitle>
            <DialogDescription>
                 <p className="py-3" >Type the title of your new resume</p>
              <Input placeholder="Job Interview"  />
            </DialogDescription>
           
            <div className="flex gap-4 justify-end mt-4">
                <Button variant={Ghost} >CREATE</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Addresume;
