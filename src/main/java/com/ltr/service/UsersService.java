package com.ltr.service;
import com.ltr.dao.UsersDao;
import com.ltr.module.Role;
import com.ltr.module.Users;
import com.ltr.exception.UserNotFoundException;
import com.ltr.mapper.Mapper;
import com.ltr.repository.UsersRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public Users createUser(Users user){
        if (isExistsByPhone(user.getPhone())){
            throw new UserNotFoundException("Phone Number Already Registered!");
        } else if(isExistsByEmail(user.getEmail())) {
            throw new UserNotFoundException("Email Already Registered!");
        }else {
            user.setRole(Role.ROLE_CUSTOMER);
            user.setRegistrationDate(LocalDateTime.now());
            return usersRepository.save(user);
        }
    }

    public UsersDao getUser(Long id){
        Users user = usersRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User Does Not Exist For User ID = " + id));
        return Mapper.mapToUserDao(user);
    }

    public boolean isExistById(Long id){
        return usersRepository.existsById(id);
    }

    public boolean isExistsByPhone(String phone){
        return usersRepository.existsByPhone(phone);
    }

    public boolean isExistsByEmail(String email){
        return usersRepository.existsByEmail(email);
    }

    public Users createAdmin(Users user){
        user.setRole(Role.ROLE_ADMIN);
        user.setRegistrationDate(LocalDateTime.now());
        return usersRepository.save(user);
    }

    public String updateUserProfile(Long id, UsersDao usersDao){
        Users user = usersRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found"));
        user.setUsername(user.getUsername());
        user.setPassword(user.getPassword());
        user.setFullName(usersDao.getFullName());
        user.setPhone(usersDao.getPhone());
        user.setEmail(usersDao.getEmail());
        user.setRegistrationDate(user.getRegistrationDate());
        usersRepository.save(user);
        return "Profile Updated Successfully...";
    }

    public String updatePassword(Long id, String password){
        usersRepository.updatePassword(id, password);
        return "Password Changed Successfully...";
    }

    public String changeUsername(Long id, String username) {
        usersRepository.updateUsername(id, username);
        return "Username Changed Successfully...";
    }

    public String deleteAccount(Long id){
        usersRepository.deleteById(id);
        return "Account Deleted SuccessFully...";
    }
}
