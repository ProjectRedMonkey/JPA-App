package com.demo;

import com.demo.modele.Photo;
import com.demo.modele.PhotoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(PhotoRepository repository){
        return(args) ->{
          //création de quelques photos
          repository.save(new Photo(1, "Cerise", "bwd"));
          repository.save(new Photo(2, "Iceberg", "mg"));
          repository.save(new Photo(3, "Gady", "Alexis"));

          log.info("Affichage de toutes les photos --------------(findAll) --------------");
          for(Photo photo  : repository.findAll()){
              log.info(photo.toString());
          }
        };
    }

}
