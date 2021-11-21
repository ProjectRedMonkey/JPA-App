package com.demo.modele;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Richer Alexis
 * @version 1.0.0
 */


public interface PhotoRepository extends CrudRepository<Photo, Integer> {
    Iterable<Photo> findByAuteur(String auteur);
    Photo findById(int id);
    void deleteById(int id);
}
