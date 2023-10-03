namespace MiSimpleAppTests;

[TestFixture]
public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void CanBeCancelledBy_AdminCancelling_ReturnsTrue()
    {
        //Arrange
        
        User user=new User();
        user.IsAdmin=true;
        Reservation reservation=new Reservation();
        
        //Act
        
        bool result=reservation.CanBeCancelledBy(user);

        //Assert
        
        //Assert.IsTrue(result);
        Assert.That(result,Is.True);
        //Assert.That(result==true);
    }

    
    [Test]
    public void CanBeCancelledBy_SameUserCancelling_ReturnsTrue()
    {
        //Arrange
        User user=new User();
        Reservation reservation=new Reservation();
        reservation.MadeBy=user;

        //Act
        bool result=reservation.CanBeCancelledBy(user);

        //Assert
        Assert.That(result,Is.True);

    }

    
    [Test]
    public void CanBeCancelledBy_AnotherUserCancelling_ReturnsFalse()
    {
        //Arrange
        User user=new User();
        Reservation reservation=new Reservation();
        reservation.MadeBy=user;

        //Act
        User newUser=new User();
        bool result=reservation.CanBeCancelledBy(newUser);

        //Assert
        Assert.That(result,Is.False);

    }

}