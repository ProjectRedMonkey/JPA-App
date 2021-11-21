package com.demo.modele;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Richer Alexis
 * @version 1.0.0
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PhotoController {
    @Autowired
    private PhotoRepository dao;

    @GetMapping(value="/Photos")
    public Iterable<Photo> getPhotos(){
        return dao.findAll();
    }

    @GetMapping(value="/Photos/{id}")
    public Photo getPhoto(@PathVariable int id){
        return dao.findById(id);
    }

    @PostMapping(value="/Photos")
    public void addPhoto(@RequestBody Photo p){
        dao.save(p);
    }

    @PutMapping(value="/Photos/{id}")
    public void modifyPhoto(@PathVariable int id, @RequestBody Photo p){
        p.setId(id);
        dao.save(p);
    }

    @DeleteMapping(value="/Photos/{id}")
    public void supprimerPhoto(@PathVariable int id){
        dao.deleteById(id);
    }
}
