package br.edu.ufop.web.sales.controller;

import br.edu.ufop.web.sales.business.services.EventService;
import br.edu.ufop.web.sales.controller.dtos.events.*;
import br.edu.ufop.web.sales.infrastructure.entities.EventEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    // --- CREATE ---
    @PostMapping
    public ResponseEntity<EventDTO> create(@RequestBody CreateEventDTO createEventDTO) {
        return ResponseEntity.ok(eventService.create(createEventDTO));
    }

    // --- READ ---
    @GetMapping
    public ResponseEntity<List<EventDTO>> getAll() {
        return ResponseEntity.ok(eventService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventEntity> getById(@PathVariable UUID id) {
        Optional<EventEntity> event = eventService.getById(id);
        if (event.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(event.get());
    }

    // --- UPDATE (Parciais) ---
    @PatchMapping("/price")
    public ResponseEntity<EventDTO> updatePrice(@RequestBody UpdateEventPriceDTO updateEventPriceDTO) {
        return ResponseEntity.ok(eventService.updatePrice(updateEventPriceDTO));
    }

    @PatchMapping("/data")
    public ResponseEntity<EventDTO> updateData(@RequestBody UpdateEventDataDTO updateEventDataDTO) {
        return ResponseEntity.ok(eventService.updateData(updateEventDataDTO));
    }

    @PatchMapping("/sales-period")
    public ResponseEntity<EventDTO> updateDataSale(@RequestBody UpdateEventDataSaleDTO updateEventDataSaleDTO) {
        return ResponseEntity.ok(eventService.updateDataSale(updateEventDataSaleDTO));
    }

    // --- DELETE ---
    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody deleteEventDTO deleteEventDTO) {
        eventService.delete(deleteEventDTO);
        return ResponseEntity.noContent().build(); // Retorna 204 No Content indicando sucesso sem corpo na resposta
    }
}
