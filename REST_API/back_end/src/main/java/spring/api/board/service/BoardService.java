package spring.api.board.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.api.board.domain.Board;
import spring.api.board.dto.request.ContentRequest;
import spring.api.board.dto.response.BoardResponse;
import spring.api.board.dto.response.BoardsResponse;
import spring.api.board.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Transactional
    public void save(BoardResponse response) {
        boardRepository.save(Board.builder()
                .title(response.getTitle())
                .content(response.getContent())
                .image(response.getImage())
                .build());
    }

    public BoardResponse getOne(Long id) {
        Board result = findById(id);
        return BoardResponse.builder()
                .id(result.getId())
                .title(result.getTitle())
                .content(result.getContent())
                .image(result.getImage())
                .build();
    }

    public BoardsResponse getAll() {
        List<Board> results = boardRepository.findAll();
        List<BoardResponse> boards = new ArrayList<>();
        for (Board board : results) {
            boards.add(BoardResponse.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .build());
        }
        return BoardsResponse.builder()
                .count(boards.size())
                .boards(boards)
                .build();
    }

    @Transactional
    public void delete(Long id) {
        Board result = findById(id);
        boardRepository.delete(result);
    }

    @Transactional
    public void updateContent(Long id, ContentRequest request) {
        Board board = findById(id);
        board.changeContent(request.getContent());
        log.info("BoardService.updateContent");
    }

    private Board findById(Long id) {
        return boardRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}
