const notesCtrl={
}

const Note=require('../models/Note');

notesCtrl.getNotes=async (req,res)=>{
    const notes=await Note.find();//[{},{}]
    res.json(notes)
}
notesCtrl.createNote= async (req, res) =>{
    // console.log(req.body);
    const {title,content,date,author} =req.body;
    const newNote=new Note({ 
        title:title,
        content:content,
        date:date, 
        author:author
    });
    await newNote.save();
    //res.status(201).json(newNote);
    res.json({message:'Notas POST request'})
}
notesCtrl.getNote= async(req, res) =>{
    const note=await Note.findById(req.params.id);
    //res.json(`GET /api/notes/${req.params.id}`);
    res.json(note)
}
notesCtrl.updateNote= async(req, res) =>{
    const {title,content,author}=req.body;
    // await Note.findByIdAndUpdate(req.params.id,{title,content,author},{new:true});
    await Note.findOneAndUpdate({_id:req.params.id},{title,content,author},{new:true});
    //console.log(req.body);
    //res.send(`PATCH /api/notes/:id`);
    res.json({message:`La nota ${req.params.id} ha sido actualizada`})

    // Note.findByIdAndUpdate(req.params.id, req.body ,{new:true}, (err
    // res.json({message:'PUT update nota'}
    
}
notesCtrl.deleteNote=async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:`Se elimino la nota con id ${req.params.id}`});
}
module.exports=notesCtrl;