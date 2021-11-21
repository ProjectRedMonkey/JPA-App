package com.demo.modele;

import javax.persistence.*;

/**
 * @author Richer Alexis
 * @version 1.0.0
 */

@Entity
@Table(name = "PHOTO")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomPhoto;
    private String auteur;

    protected Photo(){

    }

    public Photo(int id, String nomPhoto, String auteur) {
        this.id = id;
        this.nomPhoto = nomPhoto;
        this.auteur = auteur;
    }

    public Integer getId() {
        return id;
    }

    public String getNomPhoto() {
        return nomPhoto;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNomPhoto(String nomPhoto) {
        this.nomPhoto = nomPhoto;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }
}
