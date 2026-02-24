package br.edu.ufop.web.sales.controller.dtos.events;

import java.time.LocalDateTime;
import java.util.UUID;

public record UpdateEventDataDTO(UUID id, LocalDateTime data){
}
