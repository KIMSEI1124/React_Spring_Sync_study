package spring.api.board.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import spring.api.board.service.BoardService;

import java.util.Map;

@Slf4j
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {
    private final BoardService boardService;

    @PostMapping("/post")
    public void get(@RequestBody Map<String, Object> request) {
        request.forEach((key, value) -> {
            log.info("key : " + key);
            log.info("value : " + value);
        });
    }
}
