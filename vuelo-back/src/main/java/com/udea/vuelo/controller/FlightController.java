package com.udea.vuelo.controller;

import com.udea.vuelo.model.Flight;
import com.udea.vuelo.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {
    @Autowired
    private FlightService flightService;

    @GetMapping("/searchbydate")
    public List<List<Flight>> searchFlightsByDate(
            @RequestParam(name = "startDate") String startDate,
            @RequestParam(name = "endDate") String endDate) {
        LocalDate parsedStartDate = LocalDate.parse(startDate);
        LocalDate parsedEndDate = LocalDate.parse(endDate);
        return flightService.searchFlightsByDate(parsedStartDate, parsedEndDate);
    }

    @GetMapping("/searchbyprice")
    public List<List<Flight>> searchFlightsByPrice(
            @RequestParam(name = "startPrice") int startPrice,
            @RequestParam(name = "endPrice") int endPrice) {

        return flightService.searchFlightsByPrice(startPrice, endPrice);
    }

    @GetMapping("/searchbyroute")
    public List<List<Flight>> searchFlightsByRoute(
            @RequestParam(name = "origin") String origin,
            @RequestParam(name = "destination") String destination) {

        return flightService.searchFlightsByRoute(origin, destination);
    }

    @GetMapping("/searchbyairline")
    public List<List<Flight>> searchFlightsByAirline(

            @RequestParam(name = "airline") String airline) {

        return flightService.searchFlightsByAirline(airline);
    }
}
