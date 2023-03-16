package spring.api.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.api.board.domain.Board;
import spring.api.board.repository.BoardRepository;
import spring.api.board.service.dto.BoardsDto;
import spring.api.board.service.dto.BoardDto;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    @Transactional
    public void save(BoardDto dto) {
        boardRepository.save(Board.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .build());
    }

    public BoardDto getOne(Long id) {
        Board result = boardRepository.findById(id).orElseThrow(RuntimeException::new);
        return BoardDto.builder()
                .title(result.getTitle())
                .content(result.getContent())
                .build();
    }

    public BoardsDto getAll() {
        List<Board> results = boardRepository.findAll();
        if (results.isEmpty()) {
            throw new RuntimeException("Run time Exception");
        }
        List<BoardDto> boards = new ArrayList<>();
        for (Board board : results) {
            boards.add(BoardDto.builder()
                    .title(board.getTitle())
                    .content(board.getContent())
                    .build());
        }
        return BoardsDto.builder()
                .count(boards.size())
                .boards(boards)
                .build();
    }
}
