package br.edu.ufop.web.sales.controller.dtos.events;

import java.util.UUID;

public record UpdateEventPriceDTO(UUID id,
                                  float price) {


}
