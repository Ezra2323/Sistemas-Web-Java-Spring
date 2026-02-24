package br.edu.ufop.web.sales.business.services;

import br.edu.ufop.web.sales.business.converters.EventConverter;
import br.edu.ufop.web.sales.controller.dtos.events.*;
import br.edu.ufop.web.sales.exception.UseCaseException;
import br.edu.ufop.web.sales.infrastructure.entities.EventEntity;
import br.edu.ufop.web.sales.infrastructure.repositories.IEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EventService {

    private final IEventRepository eventRepository;

    public List<EventDTO> getAll() {

        List<EventEntity> eventEntityList = eventRepository.findAll();

        return eventEntityList.stream()
                .map(EventConverter::toDTO)
                .toList();

    }

    public EventDTO create(CreateEventDTO createEventDTO) {

        EventEntity eventEntity = EventConverter.toEntity(createEventDTO);
        eventEntity = eventRepository.save(eventEntity);
        return EventConverter.toDTO(eventEntity);

    }

    public Optional<EventEntity> getById(UUID id) {
        return eventRepository.findById(id);
    }

    public EventDTO updatePrice(UpdateEventPriceDTO updateEventDTO){
        Optional<EventEntity> eventEntityOptional = eventRepository.findById(updateEventDTO.id());
        if(eventEntityOptional.isEmpty()){
            throw new UseCaseException("Event ID does not found");
        }
        EventEntity eventEntity = eventEntityOptional.get();

        eventEntity.setPrice(updateEventDTO.price());

        eventRepository.save(eventEntity);

        return EventConverter.toDTO(eventEntity);
    }

    public EventDTO updateData(UpdateEventDataDTO updateEventDataDTO){
        Optional<EventEntity> eventEntityOptional = eventRepository.findById(updateEventDataDTO.id());
        if(eventEntityOptional.isEmpty()){
            throw new UseCaseException("Event ID does not found");
        }
        EventEntity eventEntity = eventEntityOptional.get();

        eventEntity.setDateTime(updateEventDataDTO.data());

        eventRepository.save(eventEntity);

        return EventConverter.toDTO(eventEntity);
    }

    public EventDTO updateDataSale(UpdateEventDataSaleDTO updateEventDataSaleDTO){
        Optional<EventEntity> eventEntityOptional = eventRepository.findById(updateEventDataSaleDTO.id());
        if(eventEntityOptional.isEmpty()){
            throw new UseCaseException("Event ID does not found");
        }
        EventEntity eventEntity = eventEntityOptional.get();

        eventEntity.setStartingSales(updateEventDataSaleDTO.startSales());
        eventEntity.setEndingSales(updateEventDataSaleDTO.endSales());

        eventRepository.save(eventEntity);

        return EventConverter.toDTO(eventEntity);
    }

    public void delete(deleteEventDTO deleteEventDTO){
        Optional<EventEntity> eventEntityOptional = eventRepository.findById(deleteEventDTO.id());
        if(eventEntityOptional.isEmpty()){
            throw new UseCaseException("Event ID does not found");
        }

        EventEntity eventEntity = eventEntityOptional.get();

        eventRepository.delete(eventEntity);
    }

}
