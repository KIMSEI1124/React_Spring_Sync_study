package spring.api.board.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.api.board.dto.request.ContentRequest;
import spring.api.board.service.BoardService;
import spring.api.board.dto.response.BoardResponse;
import spring.api.board.dto.response.BoardsResponse;

@Slf4j
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {
    private final BoardService boardService;

    @PostMapping("/board")
    public ResponseEntity<Void> post(@RequestBody BoardResponse request) {
        log.info("title = " + request.getTitle() + "content = " + request.getContent());
        boardService.save(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/board/{id}")
    public ResponseEntity<BoardResponse> get(@PathVariable("id") Long id) {
        BoardResponse data = boardService.getOne(id);
        return ResponseEntity.ok(data);
    }

    @GetMapping("/boards")
    public ResponseEntity<BoardsResponse> getAll() {
        return ResponseEntity.ok(boardService.getAll());
    }

    @DeleteMapping("/board/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        boardService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/board/{id}")
    public ResponseEntity<Void> updateContent(
            @RequestBody ContentRequest request,
            @PathVariable("id") Long id) {
        boardService.updateContent(id, request);
        return ResponseEntity.ok().build();
    }
}
